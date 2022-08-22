class PO_Login_Participant_Web_page {
    title(){
        return cy.get('#participantLogin .login-action h1');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    email_input() {
        return cy.get('#loginEmailOrPhone');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    password_input() {
        return cy.get('#password');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    login_button() {
        return cy.get('[ng-click="finishLogin()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    start_login_button() {
        return cy.get('[ng-click="startLogin()"]');
    }
}

export default PO_Login_Participant_Web_page;