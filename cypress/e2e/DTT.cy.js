describe("my test suite", () => {
    //direct access
    it.skip("my test case", () => {
        cy.visit('opensource-demo.orangehrmlive.com')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text', 'Dashboard')
    })

    //access via hook
    it.skip("my test x fixture", () => {
        cy.visit('opensource-demo.orangehrmlive.com')
        cy.wait(5000)
        cy.fixture('orangehrm').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get('.oxd-button').click()
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                .should('have.text',data.expected)
        })
    })

    //access via hoook multiple blocks
    /*
    let userdata
    before(() => {
        cy.fixture('orangehrm').then((data) => {
        userdata=data
        })
    })
    it("my test x blocks", () => {
        cy.visit('opensource-demo.orangehrmlive.com')
        cy.wait(5000)
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get('.oxd-button').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text',userdata.expected)
    })
    */
    it('data driven', () => {
        cy.fixture('orangehrm2').then((data) => { 
            cy.visit('opensource-demo.orangehrmlive.com')
            data.forEach((userData) => {
                
                cy.wait(5000)
                cy.get("input[placeholder='Username']").type(userData.username)
                cy.get("input[placeholder='Password']").type(userData.password)
                cy.get('.oxd-button').click()

                if(userData.username=='Admin' && userData.password=='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                        .should('have.text',userData.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    cy.wait(5000)
                }
                else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userData.expected)
                    cy.wait(5000)
                }
            })
        })
    })
})