describe('Navigation', () => {
    it('Visit website', () => {
        cy.visit("https://demo.opencart.com")
        cy.title().should('eq','Your Store')
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.wait(2000)
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        cy.go('back')
        cy.wait(2000)
        cy.title().should('eq','Your Store')
        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        cy.wait(2000)
        cy.go(-1)
        cy.wait(2000)
        cy.go(1)
        
    })
})