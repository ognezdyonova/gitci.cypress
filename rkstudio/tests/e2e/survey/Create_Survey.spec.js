/**
 Create a survey (copy the raw survey from an existing survey from another org, then paste in new org)
 */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Surveys from "../../../pages/ResearchKitStudio/PO_Surveys";
import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";

describe("Create a survey (copy the raw survey from an existing survey from another org, then paste in new org)", () => {

    let survey_name = 'test survey '.concat(new Date().getTime().toString());

    beforeEach(() => {
        cy.login();
    })

    it("Create survey", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.survey_items()
            .should("be.visible");

        surveys.new_survey_input_name()
            .should("be.visible")
            .type(survey_name)
        surveys.new_survey_select_category()
            .should("be.visible")
            .select('iOS');
        surveys.new_survey_button()
            .should("be.visible")
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible")
            .and("contain.text", survey_name);

        survey_page.add_survey_step()
            .should("be.visible");

        survey_page.add_consent()
            .should("be.visible");

        survey_page.editor_overview_tab_button()
            .should("be.visible");

        survey_page.editor_overview_tab()
            .should("be.visible");

        survey_page.editor_look_and_feel_tab_button()
            .should('be.visible')
            .click({force: true});

        survey_page.survey_settings_tab()
            .should("be.visible")
            .click({force: true});

        survey_page.settings_fields_notes_label()
            .should("be.visible")
            .and("contain.text", 'For internal use within MyDataHelps Designer (not displayed to participants)')
            .and("contain.text", 'Used when the survey is displayed to participants')
            .and("contain.text", 'A brief description or preview of the survey, e.g. "2 minutes", "Questions about Alcohol"')
            .and("contain.text", 'Allows previously submitted results for this survey to be deleted')
            .and("contain.text", 'Allows tasks associated with the survey to be completed with a web link without participant login');

        survey_page.settings_name_survey_input()
            .should("be.visible")
            .and("have.value", survey_name);

        survey_page.settings_display_name_survey_input()
            .should("be.visible")
            .and("have.value", survey_name);

        survey_page.settings_display_name_locale_survey_select()
            .should("be.visible");

        survey_page.settings_description_locale_survey_select()
            .should("be.visible");

        survey_page.settings_description_text_survey_input()
            .should("be.visible");

        survey_page.settings_results_can_be_deleted_checkbox()
            .should("be.visible");

        survey_page.settings_allow_task_completion_via_link_checkbox()
            .should("be.visible");

        survey_page.settings_save_survey_properties_button()
            .should("be.visible");

        survey_page.settings_category_survey_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'iOS');

        survey_page.survey_share_tab()
            .should("be.visible")
            .click({force: true});

        survey_page.share_title()
            .should("be.visible")
            .and("contain.text", 'Sharing is not enabled for this survey');

        survey_page.share_description()
            .should("be.visible");

        survey_page.share_enable_button()
            .should("be.visible");
    });

    it("Copy survey", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible")
            .select('iOS');

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(survey_name)

        surveys.survey_copy_button()
            .should("be.visible")
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible")
            .and("contain.text", survey_name)
            .and("contain.text", '(Copy)');

        survey_page.add_survey_step()
            .should("be.visible");

        survey_page.add_consent()
            .should("be.visible");

        survey_page.editor_overview_tab_button()
            .should("be.visible");

        survey_page.editor_overview_tab()
            .should("be.visible");

        survey_page.editor_look_and_feel_tab_button()
            .should('be.visible')
            .click({force: true});

        survey_page.survey_settings_tab()
            .should("be.visible")
            .click({force: true});

        survey_page.settings_fields_notes_label()
            .should("be.visible")
            .and("contain.text", 'For internal use within MyDataHelps Designer (not displayed to participants)')
            .and("contain.text", 'Used when the survey is displayed to participants')
            .and("contain.text", 'A brief description or preview of the survey, e.g. "2 minutes", "Questions about Alcohol"')
            .and("contain.text", 'Allows previously submitted results for this survey to be deleted')
            .and("contain.text", 'Allows tasks associated with the survey to be completed with a web link without participant login');

        survey_page.settings_name_survey_input()
            .should("be.visible")
            .and("have.value", survey_name.concat(' (Copy)'));

        survey_page.settings_display_name_survey_input()
            .should("be.visible")
            .and("have.value", survey_name.concat(' (Copy)'));

        survey_page.settings_display_name_locale_survey_select()
            .should("be.visible");

        survey_page.settings_description_locale_survey_select()
            .should("be.visible");

        survey_page.settings_description_text_survey_input()
            .should("be.visible");

        survey_page.settings_results_can_be_deleted_checkbox()
            .should("be.visible");

        survey_page.settings_allow_task_completion_via_link_checkbox()
            .should("be.visible");

        survey_page.settings_save_survey_properties_button()
            .should("be.visible");

        survey_page.settings_category_survey_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Uncategorized');

        survey_page.survey_share_tab()
            .should("be.visible")
            .click({force: true});

        survey_page.share_title()
            .should("be.visible")
            .and("contain.text", 'Sharing is not enabled for this survey');

        survey_page.share_description()
            .should("be.visible");

        survey_page.share_enable_button()
            .should("be.visible");
    });

    it("Remove created survey", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .and("contain.text", survey_name);

        surveys.survey_remove_button()
            .should("be.visible")
            .click({force: true, multiple: true})

        surveys.survey_items()
            .should("not.exist");
    });
});


