import PO_Header from "./PO_Header";
import PO_Project_Settings_Tab from "./PO_Project_Settings_Tab";
import PO_Project_Activity_Tab from "./PO_Project_Activity_Tab"
import PO_Project_Invite_Participants_Tab from "./PO_Project_Invite_Participants_Tab"
import PO_Project_Participants_list_Tab from "./PO_Project_Participants_list_Tab"
import PO_Project_Schedules_Tab from "./PO_Project_Schedules_Tab"
import PO_Project_SensorEHRData_Tab from "./PO_Project_SensorEHRData_Tab"
import PO_Notification from "./PO_Notification";
import PO_ChooseScheduleTypeModal from "./modals/PO_ChooseScheduleTypeModal";
import PO_DateBasedScheduleModal from "./modals/PO_DateBasedScheduleModal";
import PO_EventBasedScheduleModal from "./modals/PO_EventBasedScheduleModal";
import PO_EnrollmentBasedScheduleModal from "./modals/PO_EnrollmentBasedScheduleModal";

class PO_Project {
    constructor() {
        this.header = new PO_Header()
        this.settings = new PO_Project_Settings_Tab();
        this.activity = new PO_Project_Activity_Tab();
        this.invite_participants = new PO_Project_Invite_Participants_Tab();
        this.participants_list = new PO_Project_Participants_list_Tab();
        this.schedules = new PO_Project_Schedules_Tab();
        this.sensor_EHR = new PO_Project_SensorEHRData_Tab();
        this.notification = new PO_Notification();
        this.choose_schedule_type_modal = new PO_ChooseScheduleTypeModal();
        this.date_based_schedule_modal = new PO_DateBasedScheduleModal();
        this.event_based_schedule_modal = new PO_EventBasedScheduleModal();
        this.enrollment_based_schedule_modal = new PO_EnrollmentBasedScheduleModal();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('.selected-item-banner');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_tab() {
        return cy.get('.editor-tabs a').contains('Settings')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    sensor_data_tab() {
        return cy.get('.editor-tabs a').contains('Sensor & EHR Data');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    app_layout_tab() {
        return cy.get('.editor-tabs a').contains('App Layout ');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    schedules_tab() {
        return cy.get('.editor-tabs a').contains('Schedules');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    invitations_tab() {
        return cy.get('.editor-tabs a').contains('Add / Invite Participants');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participants_tab() {
        return cy.get('.editor-tabs > [ng-show="projectPermissions.indexOf(\'StudyParticipants\') != -1"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    activity_tab() {
        return cy.get('.editor-tabs a').contains('Activity');
    }
}

export default PO_Project;