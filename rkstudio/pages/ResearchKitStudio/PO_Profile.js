class PO_Profile {
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
        return cy.get('#userprofile-box h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    back_link() {
        return cy.get('#back-link a').contains('Back');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logout_link() {
        return cy.get('#back-link a').contains('Logout');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    change_password_tab() {
        return cy.get('.tabs-bar > [tab="ChangePassword"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    my_information_tab() {
        return cy.get('.tabs-bar > [tab="MyInformation"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    security_questions_tab() {
        return cy.get('.tabs-bar > [tab="SecurityQuestions"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    blinded_mode_tab() {
        return cy.get('.tabs-bar > [tab="BlindedMode"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    two_step_verification_tab() {
        return cy.get('.tabs-bar > [tab="TwoStepVerification"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    old_password_input() {
        return cy.get('#OldPassword');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_password_input() {
        return cy.get('#new-password');
    };

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirm_password_input() {
        return cy.get('#confirm-new-password');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    first_name_input() {
        return cy.get('#FirstName');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    middle_name_input() {
        return cy.get('#MiddleName');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    last_name_input() {
        return cy.get('#LastName');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    show_password_checkbox() {
        return cy.get('#show-password-checkbox');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    logout_other_sessions_checkbox() {
        return cy.get('#LogOutOtherAppsAndSessions');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    security_question_explanation() {
        return cy.get('.security-question-explanation');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    security_question_suggestions_select() {
        return cy.get('#security-question-suggestions');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    security_question_answer_input() {
        return cy.get('#security-question-answer');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    blinded_mode_description() {
        return cy.get('#toggle-blinded-mode .instructions');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    blinded_mode_enable() {
        return cy.get('#toggle-blinded-mode [value="Enable"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    submit_button() {
        return cy.get('[value="Submit"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    disable_twostepverification_button() {
        return cy.get('#disable-twostepverification [value="Disable Two-Step Verification"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    view_recovery_codes_button() {
        return cy.get('#disable-twostepverification [value="View recovery codes"]');
    }
}

export default PO_Profile;