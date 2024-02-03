describe("hooks & tags", () => {
    beforeEach(() => {
        cy.log("This is before each hook")
    })
    afterEach(() => {
        cy.log("This is after each hook")
    })
    
    before(() => {
        cy.log("This is before hook")
    })
    after(() => {   
        cy.log("This is after hook")
    })  

    
    it("Hooks", () => {
        cy.log(" ********** This is a test ********** ")
    })
    it("Hooks 2", () => {
        cy.log(" ********** This is a test 2 ********** ")
    })
})