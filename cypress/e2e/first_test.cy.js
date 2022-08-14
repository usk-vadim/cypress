/// <reference types="Cypress"/>

describe('Login to the host', () => {
  it('passes', () => {
    cy.viewport(1024, 768)
    cy.visit("https://avtozvuk.ua/")
    cy.contains('Вхід').click()
    cy.get('#username').type('powobin882@wnpop.com')
    cy.get('#password').type('password123')
    cy.get('#_submit').click()
  })
})

// describe('Login to the host', () => {
//   it('passes', () => {
//     cy.viewport(1024, 768)
//     cy.visit("https://avtozvuk.ua/")
//     cy.contains('Вхід').click()
//     cy.get('#username').type('powobin882@wnpop.com')
//     cy.get('#password').type('password123')
//     cy.get('#_submit').click()
//   })
// })

//beautify code: Shift+Option+F
//https://avtozvuk.ua/register/check-email
//powobin882@wnpop.com
//password123