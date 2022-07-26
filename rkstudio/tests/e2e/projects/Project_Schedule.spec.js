/**
 * Cases:
 * - Schedule a survey using "Based On A Specific Date"
 * - Schedule a survey using "Event-Based Schedule"
 * - Schedule a survey using "On Enrollment": Invite yourself as a test participant, verify you receive the survey you
 * selected to be delivered after enrolling
 * - Add a new segment, verify the resulting number of participants is correct
 */
import PO_Project from "../../../pages/PO_Project";

describe('Project Scheduling', () => {
    let project_name = 'test project for Scheduling'.concat(new Date().getTime().toString());
    let schedule_name = 'test Schedule'.concat(new Date().getTime().toString());

    afterEach('remove created project', () => {
        cy.remove_project(project_name);
    });

    it("Schedule a survey using \"Based On A Specific Date\"", () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.schedules_tab()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .new_schedule_button()
            .should("be.visible")
            .click({force: true});

        project.choose_schedule_type_modal
            .title()
            .should("be.visible")
            .and('contain.text', 'Choose a Schedule Type');

        project.choose_schedule_type_modal
            .close_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnrollment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnteringSegment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .eventBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .dateBased_button()
            .should("be.visible")
            .click({force: true});

        project.date_based_schedule_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Date-Based Schedule');

        project.date_based_schedule_modal
            .name_input()
            .should("be.visible")
            .type(schedule_name);

        project.date_based_schedule_modal
            .category_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .segment_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'All Participants (0)');

        project.date_based_schedule_modal
            .start_date_input()
            .should("be.visible")
            .type(Cypress.moment().format('MM/DD/YYYY'))
            .type('{esc}');

        project.date_based_schedule_modal
            .repeat_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .hour_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .minute_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .period_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .participant_local_time_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .time_zone_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .filter_participants_checkbox()
            .should("be.visible");

        project.date_based_schedule_modal
            .action_survey_id_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.date_based_schedule_modal
            .action_survey_items()
            .should("be.visible")
            .and("have.length", 1);

        project.date_based_schedule_modal
            .action_add_notification_identifier_select()
            .should("be.visible")
            .select(1);

        project.date_based_schedule_modal
            .action_notifications_items()
            .should("be.visible")
            .and("have.length", 1);

        project.date_based_schedule_modal
            .action_survey_id_to_close_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.date_based_schedule_modal
            .action_close_survey_items()
            .should("be.visible")
            .and("have.length", 1)

        project.date_based_schedule_modal
            .action_set_custom_field_name_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .save_button()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .schedule_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("contain.text", schedule_name);
    });

    it("Schedule a survey using \"Event-Based Schedule\"", () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.schedules_tab()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .new_schedule_button()
            .should("be.visible")
            .click({force: true});

        project.choose_schedule_type_modal
            .title()
            .should("be.visible")
            .and('contain.text', 'Choose a Schedule Type');

        project.choose_schedule_type_modal
            .close_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .eventBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnteringSegment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .dateBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .eventBased_button()
            .should("be.visible")
            .click({force: true});

        project.event_based_schedule_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Event-Based Schedule');

        project.event_based_schedule_modal
            .name_input()
            .should("be.visible")
            .type(schedule_name);

        project.event_based_schedule_modal
            .category_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .segment_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'All Participants (0)');

        project.event_based_schedule_modal
            .hour_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .minute_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .period_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .participant_local_time_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .time_zone_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .filter_participants_checkbox()
            .should("be.visible");

        project.event_based_schedule_modal
            .action_survey_id_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.event_based_schedule_modal
            .action_survey_items()
            .should("be.visible")
            .and("have.length", 1);

        project.event_based_schedule_modal
            .action_add_notification_identifier_select()
            .should("be.visible")
            .select(1);

        project.event_based_schedule_modal
            .action_notifications_items()
            .should("be.visible")
            .and("have.length", 1);

        project.event_based_schedule_modal
            .action_survey_id_to_close_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.event_based_schedule_modal
            .action_close_survey_items()
            .should("be.visible")
            .and("have.length", 1)

        project.event_based_schedule_modal
            .action_set_custom_field_name_select()
            .should("be.visible");

        project.event_based_schedule_modal
            .save_button()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .schedule_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("contain.text", schedule_name);
    });

    it("Schedule a survey using \"On Enrollment\": Invite yourself as a test participant, verify you receive the " +
        "survey you selected to be delivered after enrolling", () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.schedules_tab()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .new_schedule_button()
            .should("be.visible")
            .click({force: true});

        project.choose_schedule_type_modal
            .title()
            .should("be.visible")
            .and('contain.text', 'Choose a Schedule Type');

        project.choose_schedule_type_modal
            .close_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnteringSegment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .eventBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .dateBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnrollment_button()
            .should("be.visible")
            .click({force: true});

        project.enrollment_based_schedule_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'On Enrollment Schedule');

        project.enrollment_based_schedule_modal
            .name_input()
            .should("be.visible")
            .type(schedule_name);

        project.enrollment_based_schedule_modal
            .category_select()
            .should("be.visible");

        project.enrollment_based_schedule_modal
            .filter_participants_checkbox()
            .should("be.visible");

        project.enrollment_based_schedule_modal
            .action_survey_id_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.enrollment_based_schedule_modal
            .action_survey_items()
            .should("be.visible")
            .and("have.length", 1);

        project.enrollment_based_schedule_modal
            .action_add_notification_identifier_select()
            .should("be.visible")
            .select(1);

        project.enrollment_based_schedule_modal
            .action_notifications_items()
            .should("be.visible")
            .and("have.length", 1);

        project.enrollment_based_schedule_modal
            .action_survey_id_to_close_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.enrollment_based_schedule_modal
            .action_close_survey_items()
            .should("be.visible")
            .and("have.length", 1)

        project.enrollment_based_schedule_modal
            .action_set_custom_field_name_select()
            .should("be.visible");

        project.enrollment_based_schedule_modal
            .save_button()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .schedule_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("contain.text", schedule_name);
    });

    it("Add a new segment, verify the resulting number of participants is correct", () => {
        cy.add_project(project_name);

        cy.add_paticipant();

        let project = new PO_Project();
        project.schedules_tab()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .new_schedule_button()
            .should("be.visible")
            .click({force: true});

        project.choose_schedule_type_modal
            .title()
            .should("be.visible")
            .and('contain.text', 'Choose a Schedule Type');

        project.choose_schedule_type_modal
            .close_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnrollment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .onEnteringSegment_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .eventBased_button()
            .should("be.visible");

        project.choose_schedule_type_modal
            .dateBased_button()
            .should("be.visible")
            .click({force: true});

        project.date_based_schedule_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Date-Based Schedule');

        project.date_based_schedule_modal
            .name_input()
            .should("be.visible")
            .type(schedule_name);

        project.date_based_schedule_modal
            .category_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .segment_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'All Participants (1)');

        project.date_based_schedule_modal
            .start_date_input()
            .should("be.visible")
            .type(Cypress.moment().format('MM/DD/YYYY'))
            .type('{esc}');

        project.date_based_schedule_modal
            .repeat_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .hour_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .minute_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .period_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .participant_local_time_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .time_zone_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .filter_participants_checkbox()
            .should("be.visible");

        project.date_based_schedule_modal
            .action_survey_id_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.date_based_schedule_modal
            .action_survey_items()
            .should("be.visible")
            .and("have.length", 1);

        project.date_based_schedule_modal
            .action_add_notification_identifier_select()
            .should("be.visible")
            .select(1);

        project.date_based_schedule_modal
            .action_notifications_items()
            .should("be.visible")
            .and("have.length", 1);

        project.date_based_schedule_modal
            .action_survey_id_to_close_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.date_based_schedule_modal
            .action_close_survey_items()
            .should("be.visible")
            .and("have.length", 1)

        project.date_based_schedule_modal
            .action_set_custom_field_name_select()
            .should("be.visible");

        project.date_based_schedule_modal
            .save_button()
            .should("be.visible")
            .click({force: true});

        project.schedules
            .schedule_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("contain.text", schedule_name);

        cy.remove_paticipant();
    });
})
