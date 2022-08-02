import PO_ConfirmationModal from "./modals/PO_ConfirmationModal";

class PO_Project_SensorEHRData_Tab {

    constructor() {
        this.confirmation_modal = new PO_ConfirmationModal();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    health_kit_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'healthkit\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_location_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'applelocation\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_movement_disorder_monitoring_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'applemovementdisordermonitoring\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_accelerometer_data_recording_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'appleaccelerometerdatarecording\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    sensor_kit_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'sensorkit\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    ehr_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'ehr\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    fitbit_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'fitbit\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    google_fit_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'googlefit\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    geographic_data_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSensorDataType == \'geographicdata\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    health_kit_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'healthkit\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_location_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'applelocation\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_movement_disorder_monitoring_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'applemovementdisordermonitoring\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    apple_accelerometer_data_recording_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'appleaccelerometerdatarecording\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    sensor_kit_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'sensorkit\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    ehr_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'ehr\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    fitbit_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'fitbit\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    google_fit_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'googlefit\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    geographic_data_rules_list() {
        return cy.get('sensor-data-settings [ng-show="vm.selectedSensorDataType == \'geographicdata\'"] .rules-list .sensor-data-rule')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_button() {
        return cy.get('sensor-data-settings [ng-click="vm.initiateSave()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    revert_button() {
        return cy.get('sensor-data-settings [ng-click="vm.revertSensorDataSettings()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    notification() {
        return cy.get('sensor-data-settings [ng-show="vm.sensorDataDirty()"]');
    }
}

export default PO_Project_SensorEHRData_Tab;