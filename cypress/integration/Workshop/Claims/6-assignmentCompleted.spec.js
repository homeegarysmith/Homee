describe('Schedule Estimate', () => {
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
    it('Complete Assignment', () => {
        cy.contains('Assignment Complete').click()
        cy.get('input[type=file]').selectFile('foo.pdf', {force: true})
        cy.screenshot('assignCompleteModal')
        cy.get('#job-details-confirmed').click()
        cy.get('#claim-details-confirmed').click()
        cy.contains("Update Status").click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Assignment Complete')
        cy.screenshot('assignmentComplete')
    })
})