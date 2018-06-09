const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const server = require('../server');
const User = require('../auth/models/UserModel');
const { UserDataFactory } = require('./testDataFactory');
const { connectToTestDb, dropTestCollections } = require('./utils');

const request = supertest(server);


const {
  validNewUser,
  newUserWithBadEmail,
  newUserWithBadPasswordLength,
  newUserWithBadUsernameLength,
  newUserWithBadConfirmPassword,
  newUserWithAlreadyTakenUserName,
  newUserWithAlreadyTakenEmail,
} = UserDataFactory;

async function setup() {
  await connectToTestDb();
}

describe('/signup', () => {
  beforeAll(setup);
  afterAll(dropTestCollections);

  it('Should return an error if the user email is invalid', async () => {
    const response = await request.post('/signup').send(newUserWithBadEmail);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Please enter a valid email id');
  });
  it('Should return an error if the user password length is less than 6', async () => {
    const response = await request.post('/signup').send(newUserWithBadPasswordLength);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Your password must contain between 6 to 60 characters');
  });
  it('Should return an error if the username length is less than 5', async () => {
    const response = await request.post('/signup').send(newUserWithBadUsernameLength);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Your username must contain between 5 to 60 characters');
  });
  it('Should return an error if the password and confirm password mathc', async () => {
    const response = await request.post('/signup').send(newUserWithBadConfirmPassword);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Password and confirm password don\'t match');
  });
  it('Should return no error if the user is valid', async () => {
    const response = await request.post('/signup').send(validNewUser);
    expect(response.status).toBe(200);
    expect(response.body.username).toBe('testuserjaspinder');
  });
})


describe('/signin', () => {
  beforeAll(setup);
  beforeAll(async () => {
    await request.post('/signup').send(validNewUser);
  });
  afterAll(dropTestCollections);

  it('Should return an error if the user password is incorrect', async () => {
    const response = await request.post('/signin').send(newUserWithBadEmail);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Please enter a valid email id');
  });
  it('Should return an error if the user password length is less than 6', async () => {
    const response = await request.post('/signin').send(newUserWithBadPasswordLength);
    expect(response.status).toBe(422);
    expect(response.body.message).toBe('Your password must contain between 6 to 60 characters');
  });
})