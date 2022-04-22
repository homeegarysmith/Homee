describe('Estimate Reviewed', () => {
    before(function () {
        cy.viewport(1680, 1050)
        cy.visit('https://workshop.dev.homee.com/login/internal') 
        cy.internalLogin()
    })
    it('Complete Estimate Review ', () => {
        //TODO Contruct variable for new claim it.
        const claimID = 'AUA-0000004'
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/claims')
        cy.wait(2000)
        cy.contains(claimID).click({force: true})
        cy.get('h1').should('include.text', claimID)
        cy.contains('Estimate Review').click()
        cy.get('div.jsx-3622654181 > .jsx-3622654181').type('1000{enter}')
        cy.get('input[type=file]').selectFile('estimate.pdf', {force: true})
        cy.screenshot('estReviewModal')
        cy.contains('Update Status').click()
        cy.get('button.jsx-294498644 > svg > path').click()
        cy.get('h2').should('include.text', 'Estimate Review')
        cy.screenshot('estReviewed')
    })
})