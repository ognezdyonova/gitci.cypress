/*
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

describe("General site navigation", () => {

    it("Check navigation to Home page", () => {

        let home_page = new PO_Home();
        home_page.header.organization_switcher_link()
            .should("be.visible");

        home_page.header.home_link()
            .should("be.visible");

        home_page.header.projects_link()
            .should("be.visible");

        home_page.header.surveys_link()
            .should("be.visible");

        home_page.header.notifications_link()
            .should("be.visible");

        home_page.header.settings_link()
            .should("be.visible");

        home_page.header.user_link()
            .should("be.visible");

        home_page.header.help_link()
            .should("be.visible");

        home_page.wizard_section()
            .should("be.visible");

        home_page.wizard_title()
            .should("be.visible")
            .and("contain.text", 'Organization Created')
            .and("contain.text", 'Project Created')
            .and("contain.text", 'Survey Created');

        home_page.wizard_items_list()
            .should("be.visible");

        home_page.wizard_items_list_header()
            .should("be.visible");

        home_page.wizard_section_link()
            .should("be.visible");

        home_page.wizard_description()
            .should("be.visible")
            .and("contain.text", 'Click "Manage Organization Settings" below if you need to add/remove users,' +
                ' or update the organization name, description, logo, or color.')
            .and("contain.text", 'Manage your projects - invite participants, schedule surveys for delivery, ' +
                'or manage the Apple HealthKit data you\'d like to collect.')
            .and("contain.text", 'Manage the surveys you have created, or share them with other organizations.');

        home_page.new_project_input_name()
            .should("be.visible");

        home_page.new_project_add_button()
            .should("be.visible");

        home_page.new_survey_input_name()
            .should("be.visible");

        home_page.new_survey_search_input()
            .should("be.visible");

        home_page.new_survey_add_button()
            .should("be.visible");
    });
});


