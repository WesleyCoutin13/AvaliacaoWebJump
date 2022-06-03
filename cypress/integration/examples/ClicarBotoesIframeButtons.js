/// <reference types="cypress" />


describe('Validacao de cliques botoes',() => {

    before(() =>{
        cy.visit('/')
    })

    it("Clicar no botao One", () => {
        cy.get('#iframe_panel_body').type(`{enter}`)
        
    })
})