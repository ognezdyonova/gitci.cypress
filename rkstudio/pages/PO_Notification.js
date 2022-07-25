class PO_Notification {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    message_error() {
        return cy.get('.user-message-error');
    }
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    message_info() {
        return cy.get('.user-message-info');
    }
}

export default PO_Notification;