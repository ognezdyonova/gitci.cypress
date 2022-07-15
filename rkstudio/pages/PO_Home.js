import PO_Header from "./PO_Header";

class PO_Home {
    constructor() {
        this.header = new PO_Header()
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_section() {
        return cy.get('.wizard-section');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_title() {
        return cy.get('.wizard-section .title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_items_list() {
        return cy.get('.wizard-section .wizard-items-list a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_items_list_header() {
        return cy.get('.wizard-section .wizard-items-list .list-header');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_section_link() {
        return cy.get('.wizard-section .wizard-section-link');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    wizard_description() {
        return cy.get('.wizard-section .description');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_project_input_name() {
        return cy.get('.wizard-section .wizard-items-list [ng-model="newProjectName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_project_add_button() {
        return cy.get('.wizard-section .wizard-items-list [ng-click="addProject(newProjectName)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_input_name() {
        return cy.get('.wizard-section .wizard-items-list [ng-model="newSurveyName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_search_input() {
        return cy.get('.wizard-section .wizard-items-list .survey-store-search input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_add_button() {
        return cy.get('.wizard-section .wizard-items-list [ng-click="addSurvey(newSurveyName)"]');
    }
}

export default PO_Home;