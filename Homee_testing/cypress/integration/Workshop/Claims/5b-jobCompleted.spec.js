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
    it('Job Completed', () => {
        cy.contains('Job Completed').click()
        cy.get('#status-date').click()
        cy.get('.CalendarDay__today').click()
        cy.get('#status-time').type('10:15 AM{enter}')
        cy.get('label.jsx-1893445797 > .jsx-1893445797').type("Job Completed Automated notes")
        cy.contains("Update Status").click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Job Completed')
        cy.screenshot('jobCompleted')
    })
})