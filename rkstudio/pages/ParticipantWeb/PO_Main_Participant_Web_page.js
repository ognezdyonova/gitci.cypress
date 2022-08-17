class PO_Main_Participant_Web_page {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    join_button() {
        return cy.get('.join-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    login_button() {
        return cy.get('#login-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logo() {
        return cy.get('.logo');
    }
}

export default PO_Main_Participant_Web_page;