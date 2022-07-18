class PO_Project_SensorEHRData_Tab {
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
}

export default PO_Project_SensorEHRData_Tab;