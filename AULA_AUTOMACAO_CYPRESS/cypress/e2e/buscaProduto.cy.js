describe('Cenário 1 - busca de produto', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('#search_product').type('Tshirt')
    cy.get('#submit_search').click()
  })
})