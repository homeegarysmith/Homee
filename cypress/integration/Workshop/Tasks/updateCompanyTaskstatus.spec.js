describe ('Update Claim status', () => {
    beforeEach(function () {
        cy.viewport(1680, 1050)
        cy.internalLogin()
        cy.wait(2000)
        cy.visit('https://workshop.dev.homee.com/jobs')
        cy.contains('Tasks').click()
        cy.contains('Company Tasks').click()
        cy.get('#filter-due-date-filter').click()
        cy.get('.CalendarDay__today').click()
        cy.wait(2000)
        cy.get('.jsx-3475147219.open > .dropdown-wrapper > .jsx-2639819753 > .primary > span').click({force: true})
        cy.wait(2000)
        cy.get('#filter-assignee-filter').click()
        cy.get('#assignee-filter-dropdown').type('Gary Smith')
        cy.wait(2000)
        cy.get('#assignee-filter-dropdown').type(' {enter}')
        cy.wait(2000)
        cy.get('.jsx-3475147219.open > .dropdown-wrapper > .jsx-2639819753 > .primary > span').click()
        cy.wait(2000)
    })
    it('Update In Progress Status from Status column', () => {
        cy.get(':nth-child(2) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'Not Started')
        .click()
        cy.wait(2000)
        cy.get('button.jsx-294498644 > svg').click()
        cy.get(':nth-child(2) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'In Progress')
        cy.screenshot('statusColUpdateInProgress')
    })
    it('Update In Progress Status from My Tasks View Modal', () => {
        cy.get(':nth-child(3) > .action-list-wrapper > .trigger > .jsx-3803391605 > svg').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .action-list-wrapper > .box-and-arrow > .main-box > :nth-child(1)').click()
        cy.get('.positive').click()
        cy.wait(2000)
        cy.get('.inner > .exit > svg').click()
        cy.get(':nth-child(3) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'In Progress')
        cy.screenshot('modalStatuUpdateInProgress')
    })
    it('Update Completed Status from My Tasks Status column', () => {
        cy.get(':nth-child(2) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'In Progress')
        .click()
        cy.wait(2000)
        cy.get('button.jsx-294498644 > svg').click()
        cy.get(':nth-child(2) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'Completed')
        cy.screenshot('statusColUpdateCompleted')

    })
    it('Update Completed Status from My Tasks Action Menu', () => {
        cy.get(':nth-child(3) > .action-list-wrapper > .trigger > .jsx-3803391605 > svg').click()
        cy.get(':nth-child(3) > .action-list-wrapper > .box-and-arrow > .main-box > :nth-child(1)').click()
        cy.get('.inner > .jsx-2639819753 > .secondary').click()
        cy.wait(2000)
        cy.get('.inner > .exit > svg').click()
        cy.get(':nth-child(3) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'Completed')
        cy.screenshot('modalStatusUpdateComplete')
    })
    it('Reopen Task from My Tasks Via Action Menu', () => {
        cy.get(':nth-child(2) > .action-list-wrapper > .trigger > .jsx-3803391605 > svg').click()
        cy.get(':nth-child(2) > .action-list-wrapper > .box-and-arrow > .main-box > :nth-child(3) > .action-text').click()
        cy.get(':nth-child(2) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'Not Started')
        cy.screenshot('actionMenuReopen')
    })
    it('Reopen Task from Modal', () => {
        cy.get(':nth-child(3) > .action-list-wrapper > .trigger > .jsx-3803391605 > svg').click()
        cy.get(':nth-child(3) > .action-list-wrapper > .box-and-arrow > .main-box > :nth-child(1)').click()
        cy.get('.inner > .jsx-2639819753 > .jsx-1880459314').click()
        cy.wait(2000)
        cy.get('.inner > .exit > svg').click()
        cy.get(':nth-child(3) > .jsx-3166595929 > .jsx-1736131139.table-cell').should('contain.text', 'Not Started')
        cy.screenshot('modalReopen')
    })
    it.skip('Delete Claim (Does not Work)', () => {
        let newUrl = ''
            cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen').callsFake(url => {
            newUrl = url
            })
        })
        cy.get(':nth-child(1) > .action-list-wrapper > .trigger > .jsx-3803391605 > svg').click()
        cy.contains('Edit Task').click()
        cy.get('@windowOpen').should('be.called')
        cy.visit(newURl)
        cy.contains('Delete Task').click()
        //Click Status Column
        //Confirm that the Tasl staus has been updated to In Progress
        //Click Status Column again
        //Confirm that the Task status has been updated to Completed
        //Expand Task Details
        //Confirm that completed Date and Completed by values have been properly set. 
    })
})