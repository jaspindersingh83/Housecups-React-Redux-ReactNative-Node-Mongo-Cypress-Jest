import { ROOT_URL } from '../config_cypress';
// Test1 Checking if the Search is getting rendered
describe('Testing School Search', function() {
  it('If School Search render any results', function() {
    cy.visit(`${ROOT_URL}`)
    cy.get('[href="/search-schools"]')
      .click()
    cy.url()                   
      .should('include', '/search-schools')
    cy.get('.SearchResults__item')
    cy.visit(`${ROOT_URL}`)
  })
})

// Test2 Checking if Pricing Packages are getting rendered
describe('Testing Pricing Plan Render', function() {
  it('Testing Pricing Plan Render', function() {
    cy.get('[href="/pricing"]')
      .click()
    cy.url()                   
      .should('include', '/pricing')
    cy.get('.PricingPackage')
    cy.visit(`${ROOT_URL}`)
  })
})

// Test3 Testing Login Button on Landing Page
describe('Testing Landing Page Login Page', function() {
  it('Testing Landing Page Login Page', function() {
    cy.get('[href="/signin"]')
      .click()
    cy.url()                   
      .should('include', '/signin')
    cy.get('#SignInForm__Username')
    cy.visit(`${ROOT_URL}`)
  })
})

// Test4 Testing Sign up Button on Landing Page
describe('Testing Landing Page Signup Page', function() {
  it('Testing Landing Page Signup Page', function() {
    cy.get('[href="/signup"]')
      .click()
    cy.url()                   
      .should('include', '/signup')
    cy.get('#SignUpForm__Username')
    cy.visit(`${ROOT_URL}`)
  })
})
