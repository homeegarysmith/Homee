describe('Add Workorder', () => {
    beforeEach(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
        const claimID = 'AUA-0000004'
        cy.clock
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
        
    })
    it("Add Work Order document", () => {
        cy.contains("Work authorization documents are missing from this claim assignment.").should("be.visible")
        cy.contains("Add Document").click()
        cy.get('#document-type').type("Work Order Authorizaion{enter}")
        cy.get('#document-type').click
        cy.contains("Everyone (External)").click()
        cy.get('input[type=file]').selectFile('foo.pdf', {force: true})
        cy.contains("Save").click()
        cy.get('button.jsx-294498644 > svg > path').click()
    })
})