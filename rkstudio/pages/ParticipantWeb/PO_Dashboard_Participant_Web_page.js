class PO_Dashboard_Participant_Web_page {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logo() {
        return cy.get('#banner-logo');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logout() {
        return cy.get('.logoutlink');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    tabs() {
        return cy.get('tabs[participant-info="participantInfo"] a');
    }
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    update_profile_link() {
        return cy.getElementFromFrame('iframe', '.update-profile');
    }
}

export default PO_Dashboard_Participant_Web_page;