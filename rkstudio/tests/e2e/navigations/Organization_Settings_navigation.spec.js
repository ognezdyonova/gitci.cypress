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
import PO_Settings from "../../../pages/ResearchKitStudio/PO_Settings";

describe("General site navigation", () => {
    beforeEach(() => {
        cy.login();
    })

    it("Check navigation to Organization settings page", () => {
        let home = new PO_Home();
        home.header.settings_link()
            .should("be.visible")
            .click({force: true});

        let org_settings = new PO_Settings();
        org_settings.header.organization_switcher_link()
            .should("be.visible");

        org_settings.header.projects_link()
            .should("be.visible");

        org_settings.header.notifications_link()
            .should("be.visible");

        org_settings.header.settings_link()
            .should("be.visible");

        org_settings.header.user_link()
            .should("be.visible");

        org_settings.header.help_link()
            .should("be.visible");

        org_settings.header.surveys_link()
            .should("be.visible");

        org_settings.title()
            .should("be.visible")
            .and("contain.text", 'Edit Organization Details');

        org_settings.settings_tab()
            .should("be.visible");

        org_settings.teams_tab()
            .should("be.visible");

        org_settings.service_accounts_tab()
            .should("be.visible");

        org_settings.display_name_input()
            .should("be.visible");

        org_settings.display_name_local_select()
            .should("be.visible");

        org_settings.upload_logo_input()
            .should("be.enabled");

        org_settings.org_color_input()
            .should("be.enabled");

        org_settings.org_description_textarea()
            .should("be.visible");

        org_settings.org_description_local()
            .should("be.visible");

        org_settings.save_changes_button()
            .should("be.visible");

        org_settings.user_access_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.title()
            .should("be.visible")
            .and("contain.text", 'User Access');

        org_settings.user_access_items()
            .should("be.visible");

        org_settings.user_invitation_items()
            .should("be.visible");

        org_settings.new_access_username_input()
            .should("be.visible");

        org_settings.new_access_username_save_button()
            .should("be.visible");

        org_settings.teams_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.title()
            .should("be.visible")
            .and("contain.text", 'Teams');

        org_settings.teams_items()
            .should("be.visible");

        org_settings.new_team_button()
            .should("be.visible");

        org_settings.service_accounts_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.title()
            .should("be.visible")
            .and("contain.text", 'Service Accounts');

        org_settings.service_accounts_items()
            .should("be.visible");

        org_settings.new_service_accounts_input()
            .should("be.visible");

        org_settings.new_service_account_button()
            .should("be.visible");
    });
});


