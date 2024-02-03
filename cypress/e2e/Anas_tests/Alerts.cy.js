describe("Alerts", () => {
    it.skip("JS Alerts", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']")
            .click()
        cy.wait(3000)
        cy.on('window:alert', (str) => {
            expect(str).to.contains('I am a JS Alert')
            //alert automatically closed by Cypress
        cy.get("p#result").should('have.text', 'You successfully clicked an alert')      
        })    
    })
    it.skip("JS Confirm", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']")
            .click()
        cy.wait(3000)
        cy.on('window:confirm', (str) => {
            expect(str).to.contains('I am a JS Confirm')
            //alert automatically closed by Cypress
        cy.get("#result").should('have.text', 'You clicked: Ok')      
        })    
    })
    it.skip("JS Confirm - Cancel", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']")
            .click()
        cy.wait(3000)
        
        cy.on('window:confirm', () => false) 
            //cypress close using cancel
        cy.get("#result").should('have.text', 'You clicked: Cancel')      
        })  
    it.skip("JS Prompt Alert", () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns('Cypress Automation')
            })
            cy.get("button[onclick='jsPrompt()']")     
                .click()
            cy.wait(3000)
            cy.get("#result").should('have.text', 'You entered: Cypress Automation')       
    })
    it.skip("JS Prompt Alert - Cancel", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })
        cy.get("button[onclick='jsPrompt()']")
            .click()
       cy.on('window:prompt', () => false) ;
       cy.get("#result").should('have.text', 'You entered: null')
    })  
    it('authentication popup', () => {
        /*
        cy.visit("https://the-internet.herokuapp.com/basic_auth"),{auth: 
                                                {username: 'admin',
                                                 password: 'admin'}
                                            }
        */                                        
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")    
    cy.get("div[class='example'] p").should('contain',"Congratulations! You must have the proper credentials.")
   })
})