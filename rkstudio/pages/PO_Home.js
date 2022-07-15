class PO_Home {
    wizard_section() {
        return cy.get('.wizard-section');
    }

    wizard_title() {
        return cy.get('.wizard-section .title');
    }

    wizard_items_list() {
        return cy.get('.wizard-section .wizard-items-list a');
    }

    wizard_items_list_header() {
        return cy.get('.wizard-section .wizard-items-list .list-header');
    }

    wizard_section_link() {
        return cy.get('.wizard-section .wizard-section-link');
    }

    wizard_description() {
        return cy.get('.wizard-section .description');
    }

    new_project_input_name() {
        return cy.get('.wizard-section .wizard-items-list [ng-model="newProjectName"]');
    }

    new_project_add_button() {
        return cy.get('.wizard-section .wizard-items-list [ng-click="addProject(newProjectName)"]');
    }

    new_survey_input_name() {
        return cy.get('.wizard-section .wizard-items-list [ng-model="newSurveyName"]');
    }

    new_survey_search_input() {
        return cy.get('.wizard-section .wizard-items-list .survey-store-search input');
    }

    new_survey_add_button() {
        return cy.get('.wizard-section .wizard-items-list [ng-click="addSurvey(newSurveyName)"]');
    }
}

export default PO_Home;