describe('successful login', ()=>{

    it('invalid', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')


    })

    
})