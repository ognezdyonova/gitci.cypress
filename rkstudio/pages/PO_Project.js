import PO_Header from "./PO_Header";
import PO_Project_Settings_Tab from "./PO_Project_Settings_Tab";
import PO_Project_Activity_Tab from "./PO_Project_Activity_Tab"
import PO_Project_Invite_Participants_Tab from "./PO_Project_Invite_Participants_Tab"
import PO_Project_Participants_list_Tab from "./PO_Project_Participants_list_Tab"
import PO_Project_Schedules_Tab from "./PO_Project_Schedules_Tab"
import PO_Project_SensorEHRData_Tab from "./PO_Project_SensorEHRData_Tab"

class PO_Project {
    constructor() {
        this.header = new PO_Header()
        this.settings = new PO_Project_Settings_Tab();
        this.activity = new PO_Project_Activity_Tab();
        this.invite_participants = new PO_Project_Invite_Participants_Tab();
        this.participants_list = new PO_Project_Participants_list_Tab();
        this.schedules = new PO_Project_Schedules_Tab();
        this.sensor_EHR = new PO_Project_SensorEHRData_Tab();
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
        return cy.get('[ng-class="{selected:selectedEditorSection == \'settings\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    sensor_data_tab() {
        return cy.get('[ng-class="{selected:selectedEditorSection == \'sensordata\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    app_layout_tab() {
        return cy.get('ng-class="{selected:selectedEditorSection == \'applayout\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    schedules_tab() {
        return cy.get('[ng-class="{selected:selectedEditorSection == \'schedules\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    invitations_tab() {
        return cy.get('[ng-class="{selected:selectedEditorSection == \'invitations\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participants_tab() {
        return cy.get('[ng-class="{selected:selectedEditorSection == \'participants\'}"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    activity_tab() {
        return cy.get('[ng-class="{selected:selectedEditorSection == \'projectactivity\'}"]')
    }
}

export default PO_Project;