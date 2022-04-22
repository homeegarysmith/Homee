describe('Accept Internal Claim', () => {
    before(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
    })
    it('View and Accept the claim', () => {
        //TODO Contruct variable for new claim it.
        const claimID = 'AUA-0000004'
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
        cy.contains('Accept Claim').click()
        cy.get('.css-1wh42bc-control').click()
            .type('Gary Smith {enter}')
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Accepted')
        cy.screenshot('acceptedClaim')
    })
})