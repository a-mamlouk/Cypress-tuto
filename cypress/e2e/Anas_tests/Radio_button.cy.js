describe("Radio button Demo", () => {

    it("Radio button", () => {
    cy.visit('http://test.rubywatir.com/radios.php')
    cy.xpath("//div[@id='recent4']//a[normalize-space()='Radio buttons']").should("be.visible")
    .click()
    cy.get('[value="Not sure"]').check()
    cy.get('#radioId').should('not.be.checked')
   })
   it('checkbox', () => {
    cy.visit('http://test.rubywatir.com/checkboxes.php')
    cy.get('#recent4 > ul > :nth-child(2) > a').click()
    cy.get('[value="soccer"]').should('be.checked')
    cy.get('[value="baseball"]').check()
    cy.get('[value="baseball"]').should('be.checked')
    cy.get('[value="netball"]').uncheck()
    cy.get('[value="netball"]').should('not.be.checked')
    //check all boxes
    cy.get('[type="checkbox"]').check().should('be.checked')
    .uncheck()
    //check 1st check box
    cy.get('[type="checkbox"]').first().check().should('be.checked')
    .uncheck()
    //check last check box
    cy.get('[type="checkbox"]').last().check().should('be.checked')
    .uncheck()
   })

})