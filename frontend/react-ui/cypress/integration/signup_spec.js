import { ROOT_URL } from '../config_cypress';

// Test1 Entering Correct Username but bad password
describe('SignUp Attempt', function() {
  it('Entering Incorrect length Username', function() {
    cy.visit(`${ROOT_URL}/signup`)
    cy.get('#SignUpForm__Username')
      .type('jas')
    cy.get('#SignUpForm__Password')
      .type('random password')
    cy.get('#SignUpForm__ConfirmPassword')
      .type('random1password')
    cy.get('#SignUpForm__Email')
      .type('jas@gmail.com')
    cy.get('button')     
      .click()
    cy.get('.DashboardNotification') 
      .should('contain','5 to 60 characters')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear()
  })
})

// Test2 Entering In correct Username
describe('SignUp Attempt', function() {
  it('Entering Different Password and Confirm Password', function() {
    cy.get('#SignUpForm__Username')
      .type('jaspindernative')
    cy.get('#SignUpForm__Password')
      .type('random password')
    cy.get('#SignUpForm__ConfirmPassword')
      .type('random1password')
    cy.get('#SignUpForm__Email')
      .type('jas@gmail.com')
    cy.get('button')     
      .click()
    cy.get('.DashboardNotification') 
      .should('contain',`Password and confirm password don't match`)
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear()
  })
})

// Test3 Entering Invalid email 
describe('SignUp Attempt', function() {
  it('Entering Invalid Email Id', function() {
    cy.get('#SignUpForm__Username')
      .type('jaspindernative')
    cy.get('#SignUpForm__Password')
      .type('randompassword')
    cy.get('#SignUpForm__ConfirmPassword')
      .type('randompassword')
    cy.get('#SignUpForm__Email')
      .type('jas')
    cy.get('button')     
      .click()
    cy.get('.DashboardNotification') 
      .should('contain','Please enter a valid email id')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear()
  })
})


// Test4 Entering short password
describe('SignUp Attempt', function() {
  it('Entering short password', function() {
    cy.get('#SignUpForm__Username')
      .type('jaspindernative')
    cy.get('#SignUpForm__Password')
      .type('rand')
    cy.get('#SignUpForm__ConfirmPassword')
      .type('rand')
    cy.get('#SignUpForm__Email')
      .type('jas@gmail.com')
    cy.get('button')     
      .click()
    cy.get('.DashboardNotification') 
      .should('contain','Your password must contain between 6 to 60 characters')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear()
  })
})

// Test6 Testing Signin link on Signin Page
describe('Signin Attempt', function() {
  it('Clicking on Sign In Now Hyperlink', function() {
    cy.get('[href="/signin"]')
      .click()
    cy.url()                   
      .should('include', '/signin')
    cy.get('[href="/signup"]')
      .click()
  })
})
