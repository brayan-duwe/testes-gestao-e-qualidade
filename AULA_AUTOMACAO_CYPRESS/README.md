# Automação de Testes Usando Cypress e Exploração de IA 🤖
<p align="center">Neste subdiretório foi utilizado o <a href="https://www.cypress.io">Cypress</a>, um método de automação de testes dentro de um site ✅.</p>

<p align="center">
    <a href="https://www.cypress.io/">
        <img src="https://github.com/user-attachments/assets/9f2f9fe0-4ff7-42f8-ad7f-6f74449358a4" alt="logo_cypress" width="200">
    </a>
</p>

- No projeto analisamos um e-commerce para testes 👨‍🔬, o <a href="https://automationexercise.com/">Automation Exercise</a>.
- No projeto foram realizados 3 cenários:
    - <a href='/AULA_AUTOMACAO_CYPRESS/cypress/e2e/buscaProduto.cy.js'>Busca de um produto</a>
    - <a href='/AULA_AUTOMACAO_CYPRESS/cypress/e2e/login.cy.js'>Tentativa de login</a>
    - <a href='/AULA_AUTOMACAO_CYPRESS/cypress/e2e/simulacaoCompra.cy.js'>Simulação de compra</a>
- Você pode clonar essa branch <code>automacao_cypress</code> para testar.

---

## Dependências necessárias para o funcionamento do Cypress ⚠️
<p align="center">
    <a href="https://nodejs.org/" style="display: flex; flex-direction: column; align-items: center;">
        <img src="https://github.com/user-attachments/assets/4b09a03b-4e6d-4dd4-8f54-eacc58247814" alt="logo_node" width="100">
    </a>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://www.npmjs.com/" style="display: flex; flex-direction: column; align-items: center;">
        <img src="https://github.com/user-attachments/assets/ed062e1e-b9f7-4435-a00d-d959276cce40" alt="logo_npm" width="100">
    </a>
</p>

---

## Passo a passo para executar testes 📝
1. Abra sua IDE e selecione uma pasta para rodar o projeto. Nessa pasta instalaremos o <a href="https://www.cypress.io">Cypress</a>.
  
2. Faça a instalação do Cypress somente como dependência de desenvolvedor: <code>npm install cypress --save-dev</code> no terminal da sua IDE.
  
3. Após a instalação você verá arquivos como esses: <br></br>
        <img src="https://github.com/user-attachments/assets/2f801512-da81-4d5f-bca7-e865821e3acc" alt="pasta node_modules, package-lock.json e package.json" width="160"><br>
        <sup>Pacotes adicionados ao projeto.</sup><br>

4. Digite <code>npx cypress open</code> para abrir a interface do Cypress.
  
5. Assim que o Cypress abrir, ele irá perguntar sobre qual tipo de teste queremos. Para esse projeto utilizaremos o <strong>E2E Testing</strong>. <br></br>
        <img src="https://github.com/user-attachments/assets/f7aaa2f8-d91e-43d5-8a9b-633ced8ea56f" alt="Tipos de teste do Cypress - E2E Testing e Component Testing" width="500"><br>
        <sup>Tipos de teste do Cypress.<sup><br>


6. Clique em <strong>Continue</strong>. <br></br>
        <img src="https://github.com/user-attachments/assets/3146c4c3-7996-49d9-a7e0-1a5e43a1e096" alt="inclusão de configurações do Cypress ao projeto" width="500"><br>
        <sup>Inclusão de arquivos do Cypress ao projeto.</sup><br>


7. Selecione o navegador de sua preferência e clique em <strong>Start E2E Testing in (nome do navegador)</strong>. Ele servirá para que possamos consultar os elementos e fazer os testes.<br></br>
        <img src="https://github.com/user-attachments/assets/bdf28c80-6b52-470c-a163-e4b6094cabaa" alt="Seleção do navegador" width="500"><br>
        <sup>Seleção do navegador.</sup><br>


9. Clique em <strong>Create new spec</strong>, e logo após nomeie a spec. <br></br>
        <img src="https://github.com/user-attachments/assets/27b890a4-c433-4889-a500-9bb99180f377" alt="Create new spec" width="600"><br>
        <sup>Create new spec.</sup><br>


10. Na sua IDE serão criadas essas pastas, e dentro de <a href="/AULA_AUTOMACAO_CYPRESS/cypress/e2e/">e2e</a>, estará a <strong>spec</strong> que criamos. <br></br>
        <img src="https://github.com/user-attachments/assets/622a89c3-190e-46d1-ab78-0312b3129453" alt="Specs criadas" width="200"><br>
        <sup>Specs que foram criadas.</sup> <br>

11. Ao clicar no <strong>spec</strong> criado, você poderá desenvolver os testes no site. A estrutura básica pode ser vista clicando <a href="/AULA_AUTOMACAO_CYPRESS/cypress/e2e/simulacaoCompra.cy.js">aqui</a>. O comando <code>cy.visit</code> é o site a ser testado — que no caso é o <a href="https://automationexercise.com/">Automation Exercise</a>. <br></br>
        <img src="https://github.com/user-attachments/assets/8fcfa2c8-dd59-4846-86d0-9ffe094b5f36" alt="estrutura dos comandos de um arquivo cy.js"><br>
        <sup>Estrutura dos comandos de um arquivo cy.js</sup><br>


<h4>Com esses passos conseguiremos testar aplicações web com Cypress! 🎉</h4>

---

## <a href="https://docs.google.com/document/d/15aEWIcr2vchhAoXHlTWkiyitT90M0fP63GZjx7x_JqI/edit?usp=sharing">Aplicação da IA na Automação de Testes 🧑‍💻 🦾</a>
