describe("handle drop downs", () => {

    it("Drop down with select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application")
        cy.get('#select2-billing_country-container')
            .click()
        cy.get('.select2-search__field')
            .type('United States')
            .type('{enter}')
    })
    it("Drop down with select", () => {
        cy.visit("https://www.wikipedia.org")
        cy.get('#searchInput')
            .type('Delhi')
        cy.get('.suggestion-title')
            .contains('Delhi University')
            .click()
        
    })
    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.com")
        cy.get("[name='q']")
            .type('cypress automation')
        cy.wait(2000)
            cy.get('div.wM6W7d>span')
            .should('have.length', 12)
        cy.get('div.wM6W7d>span')
            .each(($el, index, $list) => {
            if($el.text() == 'cypress automation resume'){
                cy.wrap($el).click()
            }
        })
        cy.wait(2000)
        cy.get("input[name='q']")
            .should('have.value', 'cypress automation resume')
    })
})