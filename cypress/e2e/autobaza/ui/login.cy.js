/// <reference types="cypress" />

//beautify code: Shift+Option+F
//https://avtozvuk.ua/register/check-email
//powobin882@wnpop.com
//password123

describe('Login functionality check', () => {
  context('Positive', () => {
    beforeEach(() => {
      cy.visit('https://avtozvuk.ua/')
      cy.viewport(1024, 768)
    })

    it('Login with valid credentials', () => {
      cy.contains('Вхід').click()
      cy.get('#username').type('powobin882@wnpop.com')
      cy.get('#password').type('password123')
      //cy.get('#_submit').click()
    })
  })

  context('Negative', () => {
    beforeEach(() => {
      cy.visit('https://avtozvuk.ua/')
      cy.viewport(1024, 768)
    })

    it('Login with invalid email', () => {
      cy.contains('Вхід').click()
      cy.get('#username').type('invalid@wnpop.com')
      cy.get('#password').type('password123')
      //cy.get('#_submit').click()
    })
  })
})