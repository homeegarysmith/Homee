describe('Decline Internal Claim', () => {
    before(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
    })
    it('View and Decline the claim', () => {
        //TODO Contruct variable for new claim it.
        const claimID = 'AUD-0000004'
        cy.wait(2000)
        cy.viewport(1680, 1050)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
        cy.get('.negative').click()
        cy.get('.css-1hwfws3').click()
        cy.screenshot('declinClaimReason')
        cy.contains('Provider not available').click()
        cy.get('.jsx-1688136428').click()
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Declined')
        cy.screenshot('claimDeclined')
    })
})