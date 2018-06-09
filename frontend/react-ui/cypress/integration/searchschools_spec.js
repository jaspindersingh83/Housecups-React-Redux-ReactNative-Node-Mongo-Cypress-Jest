import { ROOT_URL } from '../config_cypress';

// Test1 Check Search capability
describe('Search Lambda School Attempt', function() {
  it('Search Lambda School Attempt', function() {
    cy.visit(`${ROOT_URL}/search-schools`)
    cy.get('[placeholder="Enter School Name"]')
      .type('Lambda')
    // cy.get('.SearchResults__item')
    //   .click()
  })
})
// // Test2 Entering Correct Username but bad password
// describe('Signin Attempt', function() {
//   it('Entering Correct Username but bad password', function() {
//     cy.visit(`${ROOT_URL}/search-schools`)
//     cy.get('.SearchResults__item')
//       .click({ multiple: true, force: true })
//   })
// })