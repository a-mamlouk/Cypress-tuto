describe('Test Locators', () => {
    it('Test', function()  {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").contains('Login')  //class & contains
        cy.get("[name$='username']").type('Admin')     //attribute selector
        cy.get("input[placeholder='Password']").type('admin123')  //tag & placeholder selector
        cy.get("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click()  //tag & class selector
        cy.get(".oxd-userdropdown-name").click()  // class  selector
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()  //tag & href
    })
})

