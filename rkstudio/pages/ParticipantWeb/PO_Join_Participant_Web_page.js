class PO_Join_Participant_Web_page {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    email_input() {
        return cy.get('#joinEmailOrPhone');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    password_input() {
        return cy.get('#joinPassword');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    join_button() {
        return cy.get('.join-button');
    }
}

export default PO_Join_Participant_Web_page;