describe('Cenário 2 - Login', () => {
    it('passes', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('[data-qa="login-email"]').type('teste@gmail.com')
      cy.get('[data-qa="login-password"]').type('Teste123')
      cy.get('[data-qa="login-button"]').click()
    })
  })