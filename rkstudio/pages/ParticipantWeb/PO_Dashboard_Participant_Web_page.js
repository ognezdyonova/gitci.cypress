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
    profile_photo(){
        return cy.get('.profile-photo')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    profile_photo_error(){
        return cy.get('div.error-message')
    }

}

export default PO_Dashboard_Participant_Web_page;