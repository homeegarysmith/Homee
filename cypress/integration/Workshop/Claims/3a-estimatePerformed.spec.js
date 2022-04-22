describe('Estimate Performed', () => {
    before(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
    })
    it('Estimate Perfomed', () => {
        //TODO Contruct variable for new claim it.
        const claimID = 'AUA-0000004'
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
        cy.contains('Estimate Performed').click()
        cy.get('#status-date').click()
        cy.get('.CalendarDay__today').click()
        cy.get('.css-1hwfws3').type('9:45 AM{enter}')
        cy.get('label.jsx-1893445797 > .jsx-1893445797').type('Estimate Scheduled automation notes')
        cy.screenshot('estPerformedmodal')
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Estimate Performed')
        cy.screenshot('estPerformed.')
    })
})