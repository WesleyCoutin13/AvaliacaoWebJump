/// <reference types="cypress" />


describe('Validacao de cliques botoes',() => {

    before(() =>{
        cy.visit('/')
    })

    it("Clicar no botao One", () => {
        cy.get('#btn_one').type(`{enter}`)
    })

    it("Clicar no botao Two", () => {
        cy.get('#btn_two').type(`{enter}`)
    })

    it("Clicar no botao Four", () => {
        cy.get('#btn_link').type(`{enter}`)
    })

    it("Validar que nao existe botao One", () => {
        cy.get('#btn_one').type(`{enter}`)
    })

    it("Validar que nao existe botao Two", () => {
        cy.get('#btn_two').type(`{enter}`)
    })
    
    it("Validar que nao existe botao Four", () => {
        cy.get('#btn_link').type(`{enter}`)
    })

})


