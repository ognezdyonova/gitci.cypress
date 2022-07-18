class PO_Project_Participants_list_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participants_items() {
        return cy.get('.rk-participant-manager [ng-class="{alternating:$odd}"]')
    }
}

export default PO_Project_Participants_list_Tab;