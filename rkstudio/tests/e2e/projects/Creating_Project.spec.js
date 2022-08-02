/**
 * Create a project, verify that a consent survey was created (the consent will be the name of the project unless changed on survey settings), enable all Platforms, Save
 */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";
import PO_Projects from "../../../pages/ResearchKitStudio/PO_Projects";
import PO_Surveys from "../../../pages/ResearchKitStudio/PO_Surveys";

describe('Create a project, verify that a consent survey was created (the consent will be ' +
    'the name of the project unless changed on survey settings), enable all Platforms, Save', () => {
    let project_name = 'test project '.concat(new Date().getTime().toString());

    it('Create project from home page', () => {
        let home = new PO_Home();
        home.new_project_input_name()
            .should("be.visible")
            .type(project_name)

        home.new_project_add_button()
            .should("be.visible")
            .click({force: true});

        let project = new PO_Project();

        project.title()
            .should("be.visible")
            .and("contain.text", project_name);

        project.settings_tab()
            .should("be.visible");

        project.sensor_data_tab()
            .should("be.visible");

        project.app_layout_tab()
            .should("be.visible");

        project.schedules_tab()
            .should("be.visible");

        project.invitations_tab()
            .should("be.visible");

        project.participants_tab()
            .should("be.visible");

        project.activity_tab()
            .should("be.visible");
    });

    it("Verify that a consent survey was created", () => {
        cy.open_project(project_name);

        let project = new PO_Project();
        project.settings_tab()
            .should("be.visible")
            .click({force: true})

        project.settings.menu_items()
            .should("be.visible")
            .contains('General')
            .click({force: true});

        project.settings.general_project_id_label()
            .should("be.visible");

        project.settings.general_display_name_localization_select()
            .should("be.visible");

        project.settings.general_display_name_localization_input()
            .should("be.visible");

        project.settings.general_display_description_localization_select()
            .should("be.visible");

        project.settings.general_display_description_localization_input()
            .should("be.visible");

        project.settings.general_project_type_select()
            .should("be.visible");

        project.settings.general_consent_survey_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', project_name.concat(' Project Consent'));

        project.settings.general_consent_survey_edit_button()
            .should("be.visible");

        project.settings.general_consent_survey_preview_button()
            .should("be.visible");

        project.settings.menu_items()
            .should("be.visible")
            .contains('Coordinator Surveys')
            .click({force: true});

        project.settings.coordinator_surveys_title()
            .should("be.visible");

        project.settings.coordinator_surveys_description()
            .should("be.visible");

        project.settings.coordinator_surveys_add_survey_button()
            .should("be.visible")
            .and("be.disabled");

        project.settings.coordinator_surveys_select_survey()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'))
            .find('option:selected')
            .should('have.text', project_name.concat(' Project Consent'));

        project.settings.coordinator_surveys_add_survey_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        project.settings.coordinator_surveys_list()
            .should("be.visible")
            .and("contain.text", project_name.concat(' Project Consent'));

        project.settings.coordinator_surveys_save_button()
            .should("be.visible")
            .click({force: true});
    });

    it("Enable all Platforms, saving and check", () => {
        cy.open_project(project_name);

        let project = new PO_Project();
        project.settings_tab()
            .should("be.visible")
            .click({force: true});

        project.settings.general_platforms_list()
            .last()
            .scrollIntoView()
            .should("be.visible");

        project.settings.general_platforms_list()
            .find("input")
            .uncheck({force: true})
            .should('not.be.checked');

        project.settings.general_save_button()
            .should("be.visible")
            .click({force: true});

        cy.open_project(project_name);

        project.settings_tab()
            .should("be.visible")
            .click({force: true});

        project.settings.general_platforms_list()
            .last()
            .scrollIntoView()
            .should("be.visible");

        project.settings.general_platforms_list()
            .find("input")
            .should('not.be.checked');

        project.settings.general_platforms_list()
            .find("input")
            .check({force: true})
            .should('be.checked');

        project.settings.general_save_button()
            .should("be.visible")
            .click({force: true});
    });

    it("Enable sensor data (e.g., Steps, Active Summary, Exercise Time) - e.g., Apple Health ", () => {
        cy.open_project(project_name);

        let project = new PO_Project();
        project.sensor_data_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.health_kit_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.health_kit_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.health_kit_tab()
            .should("contain.text", '1 data type(s) being collected');

        project.sensor_EHR.apple_location_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.apple_location_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.apple_location_tab()
            .should("contain.text", 'Visit Tracking Enabled');

        project.sensor_EHR.sensor_kit_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.sensor_kit_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.sensor_kit_tab()
            .should("contain.text", '1 data type(s) being collected');

        project.sensor_EHR.fitbit_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.fitbit_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.fitbit_tab()
            .should("contain.text", 'Enabled');

        project.sensor_EHR.google_fit_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.google_fit_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.google_fit_tab()
            .should("contain.text", '1 data type(s) being collected');

        project.sensor_EHR.geographic_data_tab()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.geographic_data_rules_list()
            .should("be.visible")
            .eq(0)
            .find('[type="checkbox"]')
            .check({force: true, multiple: true});

        project.sensor_EHR.geographic_data_tab()
            .should("contain.text", 'Geographic Data Collection Enabled');


        project.sensor_EHR.notification()
            .should("be.visible")
            .and("contain.text", 'You have unsaved changes');

        project.sensor_EHR.revert_button()
            .should("be.visible");

        project.sensor_EHR.save_button()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR
            .confirmation_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Confirm');

        project.sensor_EHR
            .confirmation_modal
            .description_label()
            .should("be.visible")
            .and("contain.text", 'Are you sure that you would like to save this updated sensor data? ');

        project.sensor_EHR
            .confirmation_modal
            .confirm_button()
            .should("be.visible")
            .click({force: true});

        project.sensor_EHR.save_button()
            .should("be.visible")
            .and("be.disabled");
    });

    it('Remove created project', () => {
        let home = new PO_Home();
        home.header
            .projects_link()
            .should("be.visible")
            .click({force: true})

        let projects = new PO_Projects();
        projects.projects_list()
            .should("be.visible")
            .contains(project_name)
            .parents('.items-list-item')
            .find('.fa-trash')
            .click({force: true});

        projects.projects_list()
            .should("not.contain.text", project_name);

        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(project_name)

        surveys.survey_items()
            .should("be.visible")
            .and("contain.text", project_name);

        surveys.survey_remove_button()
            .should("be.visible")
            .click({force: true, multiple:true})

        surveys.survey_items()
            .should("not.exist");
    });
})