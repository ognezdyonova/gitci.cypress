/**
 * CASES:
 * - Configure a survey to be a coordinator survey by:
 * Selecting a project, select the Coordinator Surveys tab,
 * Selecting a survey, click +Add
 *
 * */


import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";

describe("Coordinator survey ", () => {
    let project_name = 'test project for export'.concat(new Date().getTime().toString());

    afterEach('Remove survey', () => {
        cy.remove_project(project_name);
    });

    it("Add coordinator survey ", () => {
        cy.login();
        cy.add_project(project_name);
        let project = new PO_Project();

        project.settings_tab()
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Coordinator Surveys')
            .click({force: true});

        project.settings.coordinator_surveys_title()
            .should("be.visible")
            .and("contain.text", 'Coordinator Surveys');

        project.settings.coordinator_surveys_description()
            .should("be.visible")
            .and("contain.text", 'Select which surveys may be completed by a study coordinator on behalf of participants. Single-instance surveys allow just one set of editable results to be entered per participant.');

        project.settings.coordinator_surveys_select_survey()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.settings.coordinator_surveys_add_survey_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        project.settings.coordinator_surveys_save_button()
            .should("be.visible")
            .click({force: true});

        project.settings.coordinator_surveys_list()
            .should("be.visible")
            .and("have.length.above", 0)
            .and("contain.text", project_name.concat(' Project Consent'))
            .eq(0)
            .find('input')
            .and("be.visible")
            .click({force: true});

        project.settings.coordinator_surveys_save_button()
            .should("be.visible")
            .click({force: true});
    });

});


