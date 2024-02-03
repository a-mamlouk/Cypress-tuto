import 'cypress-file-upload'

describe    ('Upload file', function(){
    it.skip('Upload file', function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test.png')
        cy.get('#file-submit').click()  
        cy.wait(5000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })
    it.skip('Upload file - renname', function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test.png',fileName:'lolemoji.png'})

        cy.get('#file-submit').click()  
        cy.wait(5000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })  
    it.skip('drag and drop', function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test.png',{subjectType:'drag-n-drop'})   
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename').contains('test.png')
    })
    it.skip('upload multiple files', function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test.png','test2.jpg'])
        cy.wait(5000)
        cy.get('#fileList > :nth-child(1)').contains('test.png')
        cy.get('#fileList > :nth-child(2)').contains('test2.jpg')
    })
    it('file shadow dom', function(){   
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test.png')
        cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test.png')
    })
})