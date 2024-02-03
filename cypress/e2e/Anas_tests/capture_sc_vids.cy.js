describe('Capture screenshots and videos', () => {  
    /*
    //manual
    it.skip('Capture screenshots', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.screenshot("homepage")   
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
        .screenshot()
        .screenshot("logo")
        .click()
        cy.wait(1000)
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        .screenshot()
    })
    */
    //autmatic on failure
    it.only('Capture screenshots', () => {
        cy.visit('https://demo.opencart.com/')
        cy.wait(1000)
        cy.get('li:nth-child(7) a:nth-child(1)').should('have.text','Camerat').click()
        cy.wait(1000)
    })

})