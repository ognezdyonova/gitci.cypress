import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Beacon_Tester {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('#current-panel h1');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_title() {
        return cy.get('add-patients-control h3');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_description() {
        return cy.get('add-patients-control h5');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_query_button() {
        return cy.get('.add-patients-control-container query-dropdown-selector[on-selected="$ctrl.setSelectedQuery(selectedQueryID)"] button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_query_options() {
        return cy.get('.add-patients-control-container query-dropdown-selector[on-selected="$ctrl.setSelectedQuery(selectedQueryID)"] ul.dropdown-menu li a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_query_search_input() {
        return cy.get('add-patients-control query-dropdown-selector input[type="search"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_number_of_patients_input() {
        return cy.get('add-patients-control #numberOfPatients');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_patient_policy_button() {
        return cy.get('add-patients-control access-policy-selector[selected-policy="$ctrl.selectedPatientPolicy"] button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_patient_policy_options() {
        return cy.get('add-patients-control access-policy-selector[selected-policy="$ctrl.selectedPatientPolicy"] ul.dropdown-menu li a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_encounter_policy_button() {
        return cy.get('add-patients-control access-policy-selector[selected-policy="$ctrl.selectedEncounterPolicy"] button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_select_encounter_policy_options() {
        return cy.get('add-patients-control access-policy-selector[selected-policy="$ctrl.selectedEncounterPolicy"] ul.dropdown-menu li a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_patient_alert_success() {
        return cy.get('.alert-success');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_title() {
        return cy.get('loop-control h3');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_description() {
        return cy.get('loop-control h5');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_select_query_button() {
        return cy.get('loop-control query-dropdown-selector[on-selected="$ctrl.setSelectedQuery(selectedQueryID)"] button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_select_query_options() {
        return cy.get('loop-control query-dropdown-selector[on-selected="$ctrl.setSelectedQuery(selectedQueryID)"] ul.dropdown-menu li a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_time_period_input() {
        return cy.get('loop-control #period');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_mode_select() {
        return cy.get('loop-control #mode');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_create_button() {
        return cy.get('loop-control [ng-click="$ctrl.createLoop()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_table_items() {
        return cy.get('loop-control table tbody tr');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    create_patient_button() {
        return cy.get('[ng-click="$ctrl.createPatients()"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    test_loops_select_query_search_input() {
        return cy.get('loop-control query-dropdown-selector input[type="search"]')
    }
}

export default PO_AdminRKS_Beacon_Tester;