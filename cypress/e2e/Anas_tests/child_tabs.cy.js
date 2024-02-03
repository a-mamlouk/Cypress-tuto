describe("Window testing", () => {
    it("Test 1", () => {
        //approche 1
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get(".example > a")
            .invoke('removeAttr', 'target')
            .click()
        cy.url().should('include', 'windows/new')
            cy.wait(3000)
        cy.go('back')   // parent window
        cy.url().should('include', 'windows')
        
    })

    it("Test 2", () => {
    //approche 2
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get(".example > a")
            .then(($link) => {
                const url = $link.prop('href')
                cy.visit(url)
            })
        cy.url().should('include', 'windows/new')
        cy.wait(3000)
        cy.go('back')   // parent window
        cy.url().should('include', 'windows')
    })
})
