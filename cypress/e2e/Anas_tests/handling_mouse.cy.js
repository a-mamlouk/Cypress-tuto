import 'cypress-iframe'
require('@4tw/cypress-drag-drop')


describe("Handling mouse actions", () => {
    it.skip("mouse click", () => {
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        
        cy.wait(2000)
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
        cy.wait(2000)
    })
    it("mouse right click", () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.context-menu-one.btn.btn-neutral').should('be.visible')
        /* approch 1
        
            .trigger('contextmenu')
        cy.get('.context-menu-icon-copy > span ').should('be.visible')    
            .should('be.visible') 
        */

        // approch 2
            .rightclick()
        cy.get('.context-menu-icon-copy > span ').should('be.visible')    
        cy.wait(2000)
    })
    it('mouse double click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')
        // approch 1
        /*
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.wait(3000)
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
        */
        // approch 2
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.wait(3000)
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })    
    it('drag and drop', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{force:true})
        cy.wait(2000)
    })
    it('scroll page', () => {
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world')
        cy.get(':nth-child(179) > [align="center"] > a > img')
            .scrollIntoView({duration:2000})
        cy.get(':nth-child(179) > [align="center"] > a > img')
            .should('be.visible')
        cy.get(':nth-child(3) > [align="center"] > a > img')
            .scrollIntoView({duration:2000})
            .should('be.visible')
        cy.get('.footerlinks')
            .scrollIntoView({duration:2000})
            .should('be.visible')
    })
})