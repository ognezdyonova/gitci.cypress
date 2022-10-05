/**
 * "General site navigation:
 * Select an existing Org, verify each tab loads as expected (e.g., Home, Projects (expands the drop down),
 *  Surveys, Notifications)
 * Note: The Projects workflow has been enhanced and when selected in the 'tab' state, the drop down displays
 * every project available within the Org. Also, in the expanded tab state, you may select the desired project
 * and launch directly into project. In addition, you can expand the caret (>) on the project of choice and select
 * the specific setting(s). You should be taken directly to that setting (Settings, Sensor & EHR Data, App Layout,
 * Schedules, Add/Invite Participants, Participants, Activity)."
 * */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Surveys from "../../../pages/ResearchKitStudio/PO_Surveys";
import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";

describe("General site navigation", () => {
    beforeEach(() => {
        cy.login();
    })

    it("Check navigation to Surveys page", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();
        surveys.header.organization_switcher_link()
            .should("be.visible");

        surveys.header.projects_link()
            .should("be.visible");

        surveys.header.notifications_link()
            .should("be.visible");

        surveys.header.settings_link()
            .should("be.visible");

        surveys.header.user_link()
            .should("be.visible");

        surveys.header.help_link()
            .should("be.visible");

        surveys.header.surveys_link()
            .should("be.visible");

        surveys.new_survey_input_name()
            .should("be.visible");

        surveys.new_survey_select_category()
            .should("be.visible");

        surveys.new_survey_button()
            .should("be.visible");

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible");

        surveys.survey_items()
            .should("be.visible");

        surveys.survey_item_name()
            .should("be.visible");

        surveys.survey_copy_button()
            .should("be.visible");

        surveys.survey_remove_button()
            .should("be.visible");

        surveys.survey_associated_tags_button()
            .should("be.visible");

        surveys.surveys_file_import()
            .should("exist");

        surveys.survey_store_button()
            .should("be.visible");

        surveys.shared_surveys_title()
            .should("be.visible");

        surveys.shared_surveys_description()
            .should("be.visible")
            .and("contain.text", 'Check out surveys shared by other organizations, and import them for use ' +
                'in your research studies.');

        surveys.shared_surveys_search_input()
            .should("be.visible");

        surveys.shared_survey_categories_search_results()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        surveys.shared_survey_items_search_results()
            .should("be.visible");
    });

    it("Check navigation to Survey page", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();
        surveys.header.organization_switcher_link()
            .should("be.visible");

        surveys.survey_items()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        let survey = new PO_Survey();

        survey.header.projects_link()
            .should("be.visible");

        survey.header.notifications_link()
            .should("be.visible");

        survey.header.settings_link()
            .should("be.visible");

        survey.header.user_link()
            .should("be.visible");

        survey.header.help_link()
            .should("be.visible");

        survey.header.surveys_link()
            .should("be.visible");

        survey.breadcrumbs()
            .should("be.visible");

        survey.survey_editor_tab()
            .should("be.visible");

        survey.survey_settings_tab()
            .should("be.visible");

        survey.survey_share_tab()
            .should("be.visible");

        survey.version_button()
            .should("be.visible");

        survey.validations_button()
            .should("be.visible");

        survey.publish_button()
            .should("be.visible");

        survey.force_publish_current_version_button()
            .should("be.visible");

        survey.save_to_pdf_button()
            .should("be.visible");

        survey.edit_raw_template_button()
            .should("be.visible");

        survey.toggle_to_fullscreen_button()
            .should("be.visible");

        survey.editor_overview_tab_button()
            .should("be.visible");

        survey.editor_look_and_feel_tab_button()
            .should("be.visible");

        survey.editor_properties_tab_button()
            .should("be.visible");

        survey.editor_navigation_tab_button()
            .should("be.visible")
            .click({force: true});

        survey.editor_validation_tab_button()
            .should("be.visible")
            .click({force: true});

        survey.editor_overview_tab()
            .should("be.visible");

        survey.editor_look_and_feel_tab()
            .should("be.visible");

        survey.editor_template_viewer()
            .should("be.visible");

        survey.survey_settings_tab()
            .should("be.visible")
            .click({force: true});

        survey.settings_fields_notes_label()
            .should("be.visible")
            .and("contain.text", 'For internal use within MyDataHelps Designer (not displayed to participants)')
            .and("contain.text", 'Used when the survey is displayed to participants')
            .and("contain.text", 'A brief description or preview of the survey, e.g. "2 minutes", "Questions about Alcohol"')
            .and("contain.text", 'Allows previously submitted results for this survey to be deleted')
            .and("contain.text", 'Allows tasks associated with the survey to be completed with a web link without participant login');

        survey.settings_name_survey_input()
            .should("be.visible");

        survey.settings_display_name_survey_input()
            .should("be.visible");

        survey.settings_display_name_locale_survey_select()
            .should("be.visible");

        survey.settings_description_locale_survey_select()
            .should("be.visible");

        survey.settings_description_text_survey_input()
            .should("be.visible");

        survey.settings_results_can_be_deleted_checkbox()
            .should("be.visible");

        survey.settings_allow_task_completion_via_link_checkbox()
            .should("be.visible");

        survey.settings_save_survey_properties_button()
            .should("be.visible");

        survey.survey_share_tab()
            .should("be.visible")
            .click({force: true});

        survey.share_title()
            .should("be.visible")
            .and("contain.text", 'Sharing is not enabled for this survey');

        survey.share_description()
            .should("be.visible");

        survey.share_enable_button()
            .should("be.visible");
    });
});


