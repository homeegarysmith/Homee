describe('Cancel Internal Claim', () => {
    beforeEach(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
        const claimID = 'AUC-0000004'
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
    })
    it('View and Accept the claim', () => {
        //TODO Contruct variable for new claim it.
        cy.contains('Accept Claim').click()
        cy.get('.css-1wh42bc-control').click()
            .type('Gary Smith{enter}')
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Accepted')
        cy.screenshot('acceptedClaim')
    })
    it('View and Cancel Claim', () => {
        
        cy.get('.negative').click()
        cy.get('.css-1hwfws3').click()
        cy.contains('Non HOMEE zip code').click()
        cy.get('.jsx-1688136428').click()
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Assignment Cancelled')
    })
})