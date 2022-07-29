class PO_ParticipantInfoPreview {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    name() {
        return cy.get('.info-block-name');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    email() {
        return cy.get('[ng-show="vm.participant.demographics.email"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    phone() {
        return cy.get('[ng-show="vm.participant.demographics.mobilePhone"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    dob() {
        return cy.get('[ng-show="vm.participant.demographics.dateOfBirth"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    id() {
        return cy.get('.participant-info > :nth-child(5)');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    tabs() {
        return cy.get('.participant-detail-tabs .tab');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    filter_by_status_select() {
        return cy.get('[ng-model="vm.selectedStatus"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_select() {
        return cy.get('[ng-model="vm.deliverSurveyName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_interval_input() {
        return cy.get('[ng-model="vm.deliverSurveyIntervalAmount"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_interval_select() {
        return cy.get('[ng-model="vm.deliverSurveyIntervalType"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_survey_interval_button() {
        return cy.get('[ng-click="vm.deliverSurvey()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    tasks_list() {
        return cy.get('[ng-show="!vm.loadingTasks"] tbody tr[ng-show="!vm.loadingTasks"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    no_results_survey_message() {
        return cy.get('.survey-result-viewer > .no-items-indicator > .no-items-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_invitation_select() {
        return cy.get('[ng-show="!vm.participant.enrolled"] > .form-field-input > .admin-select');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_id_input() {
        return cy.get('[ng-model="vm.participantEdit.secondaryIdentifier"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_email_input() {
        return cy.get('[ng-model="vm.participantEdit.demographics.email"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_phone_input() {
        return cy.get('[ng-model="vm.participantEdit.demographics.mobilePhone"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_first_name_input() {
        return cy.get('[ng-model="vm.participantEdit.demographics.firstName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_middle_name_input() {
        return cy.get('[ng-model="vm.participantEdit.demographics.middleName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participant_info_last_name_input() {
        return cy.get('[ng-model="vm.participantEdit.demographics.lastName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    close_button() {
        return cy.get('.done-button');
    }
}

export default PO_ParticipantInfoPreview;