class PO_Security_Questions_New_Account {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logo() {
        return cy.get('#logo-box img');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('#branded-container h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    security_question_select() {
        return cy.get('#security-question-suggestions');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    answer_input() {
        return cy.get('#security-question-answer');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_answer_button() {
        return cy.get('[ng-click="SaveAnswer()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    existing_questions_list() {
        return cy.get('.existing-questions .existing-question');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    qr_code() {
        return cy.get('#qr-code img');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirmation_code_input() {
        return cy.get('#ConfirmationCode');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirmation_error() {
        return cy.get('#ConfirmationCode-error');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    enable_two_step_verification_button() {
        return cy.get('[value="Enable Two-Step Verification"]');
    }

}

export default PO_Security_Questions_New_Account;