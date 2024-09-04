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
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('.cart_list').should('exist')
        cy.get('.cart_item').should('have.length.greaterThan',5)
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Michael')
        cy.get('[data-test="lastName"]').type('Akintayo')
        cy.get('[data-test="postalCode"]').type(100001)
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.contains('Checkout: Complete!').should('exist')

        

    })

})