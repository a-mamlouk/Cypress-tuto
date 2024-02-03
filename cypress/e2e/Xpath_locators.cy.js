describe('Test Locators', () => {   
    
    it('Test 2', function()  {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name$='username']").type('Admin') 
        cy.get("input[placeholder='Password']").type('admin123') 
        cy.get("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click()
        //cy.xpath("//div[@class='oxd-grid-3 orangehrm-dashboard-grid']/div").should('have.length',7) //xpath selector
        cy.xpath("//div[@class='oxd-grid-3 orangehrm-dashboard-grid']/div").should('have.length',7) // chained xpath

        cy.get(".oxd-userdropdown-name").click()  
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
    })
})