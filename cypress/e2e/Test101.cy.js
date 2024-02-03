describe('My First Test', () => {

  

  it('Test 1 - verify test', () => {
    cy.visit('https://www.google.fr/')
    cy.title().should('eq','Googlee')
  })

  //alternative syntax
  it('Test 2 - verify title - negative test', function()  {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.title().should('eq','OrangeHRM')
    })
})