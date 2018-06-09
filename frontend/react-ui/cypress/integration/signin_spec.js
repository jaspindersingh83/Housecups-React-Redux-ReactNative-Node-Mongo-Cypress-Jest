import { ROOT_URL } from '../config_cypress';
// Test1 Entering Correct Username but bad password
describe('Signin Attempt', function() {
  it('Entering Correct Username but bad password', function() {
    cy.visit(`${ROOT_URL}/signin`)
    cy.get('#SignInForm__Username')
      .type('jaspindernormal')
    cy.get('#SignInForm__Password')
      .type('jaspindernormal')
    cy.get('button')     
      .click() 
    cy.get('.DashboardNotification')               
      .should('contain', 'Incorrect Password')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear() 
  })
  // Test2 Entering InCorrect Username
  it('Entering Incorrect Username', function() {
    cy.get('#SignInForm__Username')
      .type('notavalidusername')
    cy.get('#SignInForm__Password')
      .type('somepasswrod')
    cy.get('button')     
      .click() 
    cy.get('.DashboardNotification')               
      .should('contain', 'could not find an account')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear() 
  })
  // Test3 Entering Correct Username and Password
  it('Entering Correct Username and correct password', function() {
    cy.get('#SignInForm__Username')
      .type('jaspindernormal')
    cy.get('#SignInForm__Password')
      .type('bawamano')
    cy.get('button')     
      .click()
    cy.get('.signout')     
      .click() 
  })
  // Test4 Entering incorrect Email and Password
  it('Entering Incorrect Email', function() {
    cy.get('#SignInForm__Username')
      .type('notavalidemail@gmail')
    cy.get('#SignInForm__Password')
      .type('somepasswrod')
    cy.get('button')     
      .click() 
    cy.get('.DashboardNotification')               
      .should('contain', 'could not find an account')
    cy.get('[type="text"]').clear() 
    cy.get('[type="password"]').clear() 
  })
})

// Test5 Entering Correct Email and Password
describe('Signin Attempt', function() {
  it('Entering Correct Username and correct password', function() {
    cy.get('#SignInForm__Username')
      .type('jaspinder@gmail.com')
    cy.get('#SignInForm__Password')
      .type('bawamano')
    cy.get('button')     
      .click() 
    cy.get('.signout')     
      .click() 
  })
})

// Test6 Testing Signup link on Signin Page
describe('Signin Attempt', function() {
  it('Clicking on Sign Up Now Hyperlink', function() {
    cy.get('[href="/signup"]')
      .click()
    cy.url()                   
      .should('include', '/signup')
    cy.get('[href="/signin"]')
      .click()
  })
})

// Test6 Testing Forgotpassword link on Signin Page
describe('Signin Attempt', function() {
  it('Clicking on Sign Up Now Hyperlink', function() {
    cy.get('[href="/forgotpassword"]')
      .click()
    cy.url()                   
      .should('include', '/forgotpassword')
    cy.visit(`${ROOT_URL}/signin`)
  })
})

