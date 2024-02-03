describe('Custom commands', () => {
    //click on link using label
    //overwriting existing () command
    // re-usable custom command

    it.skip('handling links', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })
    it.skip('handling links using custom commands', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    //overwrite existing command
    it.skip('overwrite existing command', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("APPLE MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })
    it('Login to website',( ) => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("Log in")
        cy.login('tester@gmail.com','Azerty@yolo')
        cy.wait(5000)
        cy.get('.ico-account').should('have.text','My account')
    })
})