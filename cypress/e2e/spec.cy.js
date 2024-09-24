describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })
})

describe('Login com Sucesso', () => {
  it('Login com sucesso e exibir a mensagem correta', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });
});


describe('Login com Credenciais Incorretas', () => {
  it('Erro com usuário inválido', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('usuário_incorreto');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Mensagem de erro com senha inválida', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('senha_incorreta');
    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});

describe('Validação de Campos Obrigatórios', () => {
  it('Erro ao tentar logar sem preencher o usuário', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Erro ao tentar logar sem preencher a senha', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});

