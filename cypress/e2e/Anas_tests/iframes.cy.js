import 'cypress-iframe'

describe("iframes", () => {
    it.skip("iframe", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(2000)
        const iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .then(cy.wrap);
        iframe.clear().type(' Hello World! {ctrl+a}')
            .get("[aria-label='Bold']").click()    ;    
    })
    it("iframe plugin",() => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(2000)
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe('#mce_0_ifr').clear().type('Hello World! {ctrl+a}')
        cy.iframe('#mce_0_ifr').type('{ctrl+b}');
        cy.wait(2000)
    })
})