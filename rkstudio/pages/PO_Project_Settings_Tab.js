class PO_Project_Settings_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    menu_items() {
        return cy.get('.project-settings-sections a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_project_id_label() {
        return cy.get(':nth-child(1) > .form-field-input > .ng-isolate-scope > :nth-child(1) > .ce-copyable-content');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_display_name_localization_select() {
        return cy.get('[ng-model="vm.displayNameLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_display_name_localization_input() {
        return cy.get('[ng-model="vm.getLocalizableEditModel(vm.displayNameLocale).DisplayName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_display_description_localization_select() {
        return cy.get('[ng-model="vm.displayDescriptionLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_display_description_localization_input() {
        return cy.get('[ng-model="vm.getLocalizableEditModel(vm.displayDescriptionLocale).DisplayDescription"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_project_type_select() {
        return cy.get('[ng-model="vm.project.Type"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_consent_survey_select() {
        return cy.get('[ng-model="vm.project.EnrollmentSettings.SurveyID"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_consent_survey_edit_button() {
        return cy.get('[ng-click="vm.editSelectedConsent()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    general_consent_survey_preview_button() {
        return cy.get('[ng-click="vm.previewSelectedConsent()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_title() {
        return cy.get('coordinator-entered-survey-settings .header');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_description() {
        return cy.get('coordinator-entered-survey-settings .description');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_select_survey() {
        return cy.get('coordinator-entered-survey-settings [ng-model="vm.addSurveyID"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_add_survey_button() {
        return cy.get('coordinator-entered-survey-settings [ng-click="vm.addSurvey()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_save_button() {
        return cy.get('coordinator-entered-survey-settings [ng-click="vm.saveSettings()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    coordinator_surveys_list() {
        return cy.get('coordinator-entered-survey-settings .survey-list tbody tr');
    }
}

export default PO_Project_Settings_Tab;