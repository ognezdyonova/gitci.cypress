import PO_Header from "./PO_Header";
import PO_Survey from "./PO_Survey";

class PO_Surveys {

    constructor() {
        this.header = new PO_Header();
        this.survey_page = new PO_Survey();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_input_name() {
        return cy.get('[ng-model="newSurveyName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_select_category() {
        return cy.get('[ng-model="newCategoryOption"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_survey_button() {
        return cy.get('[ng-click="addSurvey(newSurveyName)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    filter_survey_select_by_category() {
        return cy.get('[ng-model="filterCategory.filter"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_survey_input_by_name() {
        return cy.get('[ng-model="searchText"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_items() {
        return cy.get('.all-items-view .items-list-item');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_item_name() {
        return cy.get('.item-name');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_description_name() {
        return cy.get('.item-description');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_publish_button() {
        return cy.get('[ng-click="previewSurvey(survey);$event.stopPropagation();"]');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_copy_button() {
        return cy.get('[ng-click="copySurvey(survey.ID);$event.stopPropagation();"]');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_remove_button() {
        return cy.get('[ng-click="deleteSurvey(survey.ID);$event.stopPropagation();"]');
    }

    /**
     * use cy.subElement() method from the commands file
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_associated_tags_button() {
        return cy.get('.associated-study');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    file_import_button() {
        return cy.get('.import-from-file-label');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_store_button() {
        return cy.get('[ng-class="{\'confirm-button\':!sharedSurveysClosed}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_surveys_title() {
        return cy.get('.shared-surveys .title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_surveys_description() {
        return cy.get('.shared-surveys .description');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_surveys_search_input() {
        return cy.get('.shared-surveys .search .input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_survey_categories_search_results() {
        return cy.get('.shared-surveys .search-results .shared-survey-category');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shared_survey_items_search_results() {
        return cy.get('.shared-surveys .search-results .shared-survey-category .shared-survey');
    }
}

export default PO_Surveys;