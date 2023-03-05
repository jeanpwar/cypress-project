/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {




  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function () {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

  })
  it('preenche os campos obrigatórios e envia o formulário', function () {

    cy.clock()

    cy.get('#firstName').type('Jean Paul', { delay: 0 })
    cy.get('#lastName').type('Khoury Cunha Guerra', { delay: 0 })
    cy.get('#email').type('jeanpwar@hotmail.com', { delay: 0 })
    cy.get('#open-text-area').type('Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.cypress.', { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('be.not.visible')


  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

    cy.get('#email').type('jeanpwar@hotmailcom')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')





  })

  it('campo telefone continua vazio quando preenchido com valor não numerico', function () {

    cy.get('#phone')
      .type('abcasd')
      .should('have.value', '')





  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {


    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')



  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {

    cy.get('#firstName')
      .type('Jean Paul',)
      .should('have.value', 'Jean Paul')
      .clear()
    cy.get('#lastName').type('Khoury Cunha Guerra')
      .should('have.value', 'Khoury Cunha Guerra')
      .clear()
    cy.get('#email').type('jeanpwar@hotmail.com')
      .should('have.value', 'jeanpwar@hotmail.com')
      .clear()
    cy.get('#phone').type('12997489990').should('have.value', '12997489990')
      .clear()






  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {

    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')

  })

  it('envia o formuário com sucesso usando um comando customizado', function () {

    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')

  })

  it('Aprendendo cy.contains', function () {


    cy.get('#phone-checkbox').check()
    cy.contains('.button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })


  it('Aprendendo cy.select', function () {


    cy.get('#phone-checkbox').check()
    cy.get('select').select('blog').clear
    cy.get('select').select('cursos').clear
    cy.get('select').select('Mentoria').clear
    cy.get('select').select('youtube')
    cy.contains('.button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', function () {

    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')   // Exercicio 0 e 1 fiz no mesmo pra economizar tempo (Lessons 3)

  })

  it('seleciona um produto (Blog) por seu índice', function () {

    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "Feedback"', function () {

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
  })

  it('marca cada tipo de atendimento', function () {

    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')

      })

  })

  it('marca ambos checkboxes, depois desmarca o último', function () {

    cy.get('input[type="checkbox"]')
      .should('have.length', 2)
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')



  })


  it('seleciona um arquivo da pasta fixtures', function () {


    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/eu.jpg')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('eu.jpg')

  })
})

  




it('seleciona um arquivo simulando um drag-and-drop', function () {


  cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/eu.jpg', { action: 'drag-drop' })
      .should(function($input){
        expect($input[0].files[0].name).to.equal('eu.jpg')

  })


})

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {


  cy.fixture('eu.jpg', { encoding: null }).as('minha foto')
  cy.get('input[type="file"]#file-upload')
    .selectFile('@minha foto')
    .should(function($input){
      expect($input[0].files[0].name).to.equal('eu.jpg')

    })

})

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){

  cy.get('a:contains(Política de Privacidade)').should('have.attr', 'target', '_blank')
      // Esse cy.get poderia ter sido feito assim cy.get('#privacy a) onde o elemento #privacy é uma DIV que dentro dele tem a tag a.


})


it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){

  
  cy.get('a:contains(Política de Privacidade)')
  .invoke('removeAttr', 'target').click()
  cy.contains('h1','CAC TAT - Política de privacidade').should('be.visible')
  cy.contains('p','Talking About Testing').should('be.visible')
  

})

it('testa a página da política de privacidade de forma independente',function(){

  cy.visit('./src/privacy.html')
  cy.contains('h1','CAC TAT - Política de privacidade').should('be.visible')
  cy.contains('p','Talking About Testing').should('be.visible')


})

it.only('preenche os campos obrigatórios e envia o formulário(versão utilizando cy.clock e cy.tick)', function () {

  cy.clock()

  cy.get('#firstName').type('Jean Paul', { delay: 0 })
  cy.get('#lastName').type('Khoury Cunha Guerra', { delay: 0 })
  cy.get('#email').type('jeanpwar@hotmail.com', { delay: 0 })
  cy.get('#open-text-area').type('Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.cypress.', { delay: 0 })
  cy.get('button[type="submit"]').click()
  cy.get('.success').should('be.visible')
  cy.tick(3000)
  cy.get('.success').should('be.not.visible')


})









})
 


































