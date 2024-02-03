describe("Assertion Demo", () => {  
    it("Implicit assertion", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //should
        //and
        cy.url().should('include','auth/login')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive')
        .and('include','auth/login') 
        .and('not.include','admin')
        cy.title().should('include','HRM')
        .and('contain','HRM')
        //check image
        cy.get('.orangehrm-login-branding > img')
        .should('be.visible')
        cy.get('.orangehrm-login-logo > img')
        .should('exist')
        cy.get('.orangehrm-login-forgot-header')
        //capture all links
        cy.xpath("//a").should('have.length', 5)
        //assert value
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value','Admin')
    })


    it("Explicit assertion", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        let expName= 'Paul Collings';
        cy.get(".oxd-userdropdown-name").then( (x)=> {
            //BDD style
            let actName=x.text()
            expect(actName).to.equal(expName)
            //TDD style
            assert.equal(expName,actName)
            assert.notEqual(actName,'Admin')
        })
        
    })
})