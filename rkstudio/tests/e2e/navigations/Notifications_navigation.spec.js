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
import PO_Notifications from "../../../pages/ResearchKitStudio/PO_Notifications";

describe("General site navigation", () => {
    beforeEach(() => {
        cy.login();
    })

    it("Check navigation to Notifications page", () => {
        let home = new PO_Home();
        home.header.notifications_link()
            .should("be.visible")
            .click({force: true});

        let notifications = new PO_Notifications();
        notifications.header.organization_switcher_link()
            .should("be.visible");

        notifications.header.projects_link()
            .should("be.visible");

        notifications.header.notifications_link()
            .should("be.visible");

        notifications.header.settings_link()
            .should("be.visible");

        notifications.header.user_link()
            .should("be.visible");

        notifications.header.help_link()
            .should("be.visible");

        notifications.header.surveys_link()
            .should("be.visible");

        notifications.add_new_notification()
            .should("be.visible");

        notifications.upload_new_notification()
            .should("be.visible");

        notifications.search_input()
            .should("be.visible");

        notifications.search_type_select()
            .should("be.visible");

        notifications.notification_items()
            .should("be.visible");

        notifications.prev_page_pagination_button()
            .should("be.visible");

        notifications.next_page_pagination_button()
            .should("be.visible");
    });
});


