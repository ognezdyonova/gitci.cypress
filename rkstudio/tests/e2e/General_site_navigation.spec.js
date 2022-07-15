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

import PO_Home from "../../pages/PO_Home";
import PO_Surveys from "../../pages/PO_Surveys";

describe("General site navigation", () => {

    before(() => {
        cy.login();
    });

    it("Log In Form General Display", () => {

        let home_page = new PO_Home();
        home_page.header
            .surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys_list = new PO_Surveys();
        surveys_list.search_survey_input_by_name()
            .should("be.visible")
            .type('Android Walk' + '{enter}');

        surveys_list.survey_items()
            .should("be.visible")
            .and("contain.text",'Android Walk');

        surveys_list.survey_copy_button()
            .should("be.visible");

        surveys_list.survey_remove_button()
            .should("be.visible");

        surveys_list.survey_associated_tags_button()
            .should("be.visible")
            .and("contain.text",'Core Project')
            .and("contain.text",'Custom Field2');
    });


});


