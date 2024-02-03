describe("Handle Tables", () => {

    beforeEach(() => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.wait(1000)
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get(".btn").click()
        cy.wait(1000)
        cy.get(".btn-close").click()
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()
        cy.wait(1000)
    })
    it.skip("Check numbers of rows and columns", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").assertLength(10)
        cy.get(".table.table-bordered.table-hover>thead>tr>td")(7)
    })
    it.skip("Check the content of the table", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(2)>td:nth-child(3)").contains("olaola@das.com")
    })
    it.skip("Check the content of the table", () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text())
                    })
                })       
            })     
    })
    it("Pagination", () => {
            cy.get(".col-sm-6.text-end")
                .then((elm)=>{
                    let txt = elm.text()
                    let totalpagess= txt.substring(txt.indexOf(":")+1, txt.indexOf("Pages")-1)
                    cy.log("total number of pages ====>"+totalpagess)
                })
        let totalpages = 3
        for(let i=1; i<=totalpages; i++){
            if(totalpages>1){
                cy.log("page number ====>"+i)

                cy.get("ul[class='pagination']>li:nth-child("+i+")").click ()
                cy.wait(3000)

                cy.get(".table.table-bordered.table-hover>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(3)").then(($col)=>{
                                cy.log($col.text())
                            })
                        })
                    })

            }
        }
    })
})
