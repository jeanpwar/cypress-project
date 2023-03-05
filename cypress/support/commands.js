Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {


    cy.get('#firstName').type('Jean Paul', { delay: 0 })
    cy.get('#lastName').type('Khoury Cunha Guerra', { delay: 0 })
    cy.get('#email').type('jeanpwar@hotmail.com', { delay: 0 })
    cy.get('#open-text-area').type('Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.Apenas testando meu primeiro exercício real em cypress.cypress.', { delay: 0 })
    cy.get('button[type="submit"]').click()



})

