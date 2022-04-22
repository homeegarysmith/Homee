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
    it('Start Job', () => {
        cy.contains('Job Started').click()
        cy.get('#status-date').click()
        cy.get('.CalendarDay__today').click()
        cy.get('#status-time').type('10:00 AM{enter}')
        cy.get('label.jsx-1893445797 > .jsx-1893445797').type("Job Started Automated notes")
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Job Started')
        cy.screenshot('jobStarted')
    })
})