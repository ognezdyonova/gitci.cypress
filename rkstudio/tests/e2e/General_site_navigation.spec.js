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

describe("General site navigation", () => {

    before(() => {
        cy.visit(Cypress.env("WEB_BASE_URL"));
        cy.login()
    });

    it("Log In Form General Display", () => {

    });


});


