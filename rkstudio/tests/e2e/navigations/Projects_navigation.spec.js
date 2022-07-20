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

import PO_Home from "../../../pages/PO_Home";
import PO_Projects from "../../../pages/PO_Projects";
import PO_Project from "../../../pages/PO_Project";

describe("General site navigation", () => {
    it ("Check navigation to Projects page", () => {
        let home = new PO_Home();
        home.header.projects_link()
            .should("be.visible")
            .click({force: true});

        let projects = new PO_Projects();
        projects.header.organization_switcher_link()
            .should("be.visible");

        projects.header.home_link()
            .should("be.visible");

        projects.header.projects_link()
            .should("be.visible");

        projects.header.notifications_link()
            .should("be.visible");

        projects.header.settings_link()
            .should("be.visible");

        projects.header.user_link()
            .should("be.visible");

        projects.header.help_link()
            .should("be.visible");

        projects.header.surveys_link()
            .should("be.visible");

        projects.new_project_name_input()
            .should("be.visible");

        projects.new_project_create_button()
            .should("be.visible");

        projects.projects_list()
            .should("be.visible");

        projects.copy_project_button()
            .should("be.visible");

        projects.delete_project_button()
            .should("be.visible");
    });

    it ("Check navigation to Project page", () => {
        let home = new PO_Home();
        home.header.projects_link()
            .should("be.visible")
            .click({force: true});

        let projects = new PO_Projects();
        projects.projects_list()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        let project = new PO_Project();
        project.header.organization_switcher_link()
            .should("be.visible");

        project.header.home_link()
            .should("be.visible");

        project.header.projects_link()
            .should("be.visible");

        project.header.notifications_link()
            .should("be.visible");

        project.header.settings_link()
            .should("be.visible");

        project.header.user_link()
            .should("be.visible");

        project.header.help_link()
            .should("be.visible");

        project.header.surveys_link()
            .should("be.visible");

        project.title()
            .should("be.visible");

        project.settings_tab()
            .should("be.visible");

        project.sensor_data_tab()
            .should("be.visible");

        project.schedules_tab()
            .should("be.visible");

        project.invitations_tab()
            .should("be.visible");

        project.participants_tab()
            .should("be.visible");

        project.activity_tab()
            .should("be.visible");


        /**
         * Settings tab
         */
        project.settings_tab()
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('General')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Data Export')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Export History')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Export Explorer')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Participant Dashboard')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Custom Fields')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('End of Project')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Coordinator Surveys')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Custom Invitation Email')
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('Webhooks')
            .click({force: true});

        /**
         * Sensor an EHR data
         */

        project.sensor_data_tab()
            .click({force: true})

        project.sensor_EHR.health_kit_tab()
            .should("be.visible");

        project.sensor_EHR.apple_location_tab()
            .should("be.visible");

        project.sensor_EHR.apple_movement_disorder_monitoring_tab()
            .should("be.visible");

        project.sensor_EHR.apple_accelerometer_data_recording_tab()
            .should("be.visible");

        project.sensor_EHR.sensor_kit_tab()
            .should("be.visible");

        project.sensor_EHR.ehr_tab()
            .should("be.visible");

        project.sensor_EHR.fitbit_tab()
            .should("be.visible");

        project.sensor_EHR.google_fit_tab()
            .should("be.visible");

        project.sensor_EHR.geographic_data_tab()
            .should("be.visible");


        /**
         * Schedules tab
         */

        project.schedules_tab()
            .click({force: true})

        project.schedules.list_view_button()
            .should("be.visible");

        project.schedules.table_view_button()
            .should("be.visible");

        project.schedules.search_schedules_input()
            .should("be.visible");

        project.schedules.segment_filter_select()
            .should("be.visible");

        project.schedules.action_filter_select()
            .should("be.visible");

        project.schedules.new_schedule_button()
            .should("be.visible");


        /**
         * Invitations tab
         */

        project.invitations_tab()
            .click({force: true});

        project.invite_participants.paste_mode_button()
            .should("be.visible");

        project.invite_participants.csv_data_textarea()
            .should("be.visible");

        project.invite_participants
            .send_button()
            .should("be.visible")
            .and("be.disabled");

        project.invite_participants.file_mode_button()
            .should("be.visible")
            .click();

        project.invite_participants
            .upload_file_input()
            .should("be.visible");

        project.invite_participants
            .send_button()
            .should("be.visible")
            .and("be.disabled");

        /**
         * Participants tab
         */

        project.participants_tab()
            .click({force: true});

        project.participants_list
            .participants_items()
            .should("be.visible")

        /**
         * Activity tab
         */

        project.activity_tab()
            .click({force: true});

        project.activity.activity_type_select()
            .should("be.visible");

        project.activity.delivery_status_select()
            .should("be.visible");

        project.activity.notification_identifier_select()
            .should("be.visible");

    });
});


