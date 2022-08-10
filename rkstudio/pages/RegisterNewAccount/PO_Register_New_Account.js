class PO_Register_New_Account {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logo() {
        return cy.get('#logo-box');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title_form() {
        return cy.get('#registration-form h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    firstname_input() {
        return cy.get('#registration-form input[ng-model="firstName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    lastname_input() {
        return cy.get('#registration-form input[ng-model="lastName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    username_input() {
        return cy.get('#registration-form input[ng-model="userName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    email_input() {
        return cy.get('#registration-form input[ng-model="email"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    register_button() {
        return cy.get('#registration-form button.register-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    validation_messages() {
        return cy.get('#registration-form p.notice');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    back_to_login_button() {
        return cy.get('#back-link');
    }
}

export default PO_Register_New_Account;