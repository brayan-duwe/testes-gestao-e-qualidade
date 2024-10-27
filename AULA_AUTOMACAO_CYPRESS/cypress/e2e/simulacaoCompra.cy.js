describe('Cenário 3 - Simulação de compra', () => { //descreve o conjunto dos testes
    it('passes', () => {
      cy.visit('https://automationexercise.com/') //endereço do site que iremos testar, pode ser um localhost também
      //comandos de teste:
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
      cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
      cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
      cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
      cy.get(':nth-child(5) > .btn').click()
      cy.get('.modal-content')
      cy.get('.modal-body > :nth-child(2)').click()
      cy.get('.col-sm-6 > .btn').click()
      cy.get('.modal-content')
      cy.get('.modal-body > :nth-child(2)').click()
      cy.get('[data-qa="login-email"]').type('teste@gmail.com')
      cy.get('[data-qa="login-password"]').type('Teste123')
      cy.get('[data-qa="login-button"]').click()
    })
  })