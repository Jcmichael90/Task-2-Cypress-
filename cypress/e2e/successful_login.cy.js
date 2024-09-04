import {elements} from '../fixtures/selector'
describe('Page of Object', ()=>{
    before(()=>{
        // cy.get('/')
    })

    it('standard user', ()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.get(elements.usernameField).type(elements.standardUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
        cy.contains('Products')
        cy.contains('Products').should('be.visible')

    })

})