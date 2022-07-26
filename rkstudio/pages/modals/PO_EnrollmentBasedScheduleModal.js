class PO_EnrollmentBasedScheduleModal {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('.schedule-type-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    name_input() {
        return cy.get('[ng-model="schedule.Name"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    category_select() {
        return cy.get('[ng-model="categoryOption"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    filter_participants_checkbox() {
        return cy.get('#filter-participants');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_survey_id_select() {
        return cy.get('[ng-model="addSurveyID"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_survey_items() {
        return cy.get('[ng-show="SendSurveyActions.length"] tbody .action-row');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_add_notification_identifier_select() {
        return cy.get('[ng-model="addNotificationIdentifier"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_notifications_items() {
        return cy.get('[ng-show="SendNotificationActions.length"] tbody .action-row');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_survey_id_to_close_select() {
        return cy.get('[ng-model="closeSurveyID"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_close_survey_items() {
        return cy.get('[ng-show="CloseSurveyTaskActions.length"] tbody .action-row');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_set_custom_field_name_select() {
        return cy.get('[ng-model="setCustomFieldName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_custom_field_items() {
        return cy.get('[ng-show="SetCustomFieldActions.length"] tbody .action-row');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_webhook_actions_items() {
        return cy.get('[ng-show="CallWebhookActions.length"] tbody .action-row');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_button() {
        return cy.get('.bottom-bar button.confirm-button');
    }
}

export default PO_EnrollmentBasedScheduleModal;