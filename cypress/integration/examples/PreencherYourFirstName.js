/// <reference types="cypress" />



describe('Validacao de cliques botoes',() => {

    before(() =>{
        cy.visit('/')
    })

    it("Preencher o Campo YourFirstName", () => {
        cy.get('#first_name').type('WesleyCoutinho')
    })

    it("Clicar no botao One", () => {
        cy.get('#btn_one').type(`{enter}`)
    })

    it("Cheque opcao OptionTree", () => {
        cy.get('#opt_three').check()
    })

    it("Selecionar ExempleTwo dentro da select box", () => {
        cy.get('#select_box').select('option_two')
    })

    it("Validar presenca da imagem do logo Selenium WebDriver", () => {
        cy.get('[alt="selenium"]')
    })
})