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
    logout_link() {
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

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_name() {
        return cy.get('.participant-name');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_email() {
        return cy.get('.participant-email');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    verify_email_address_label() {
        return cy.get('.verify-email-address');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    profile_photo() {
        return cy.get('.profile-photo')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    error_message() {
        return cy.get('div.error-message')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    note_input() {
        return cy.get('[ng-model="vm.model.Notes"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    health_profile_section() {
        return cy.getElementFromFrame('iframe', '.health-profile-section');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    providers_list() {
        return cy.get('.provider');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    providers_search_input() {
        return cy.get('.search-wrap input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    loader() {
        return cy.get('.loading-indicator > .fa');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title_page() {
        return cy.get('.page-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_email_input() {
        return cy.get('[ng-model="vm.newRequestEmail"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_request_type_select() {
        return cy.get('[ng-model="vm.newRequestType"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_send_request_button() {
        return cy.get('.send-request-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_accounts_list() {
        return cy.get('.share-section .outbound-request');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_cancel_request_button() {
        return cy.get('.outbound-request .decline-button');
    }
}

export default PO_Dashboard_Participant_Web_page;