class PO_Activate_New_Account {
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
    username_input() {
        return cy.get('#reset-password-box #UserName');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_password_input() {
        return cy.get('#reset-password-box #new-password');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirm_new_password_input() {
        return cy.get('#reset-password-box #confirm-new-password');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    submit_button() {
        return cy.get('#reset-password-box [type="submit"]');
    }
}

export default PO_Activate_New_Account;