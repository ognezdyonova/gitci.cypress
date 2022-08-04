import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Beacon_Queries {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    query_list_type_radio() {
        return cy.get('#ListingTypeQuery');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    template_list_type_radio() {
        return cy.get('#ListingTypeTemplate');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    pause_services_button() {
        return cy.get('[ng-click="pauseService()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_query_button() {
        return cy.get('[ng-click="createNewQuery()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_beacon_template_button() {
        return cy.get('[ng-click="createNewBeaconTemplate()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_input() {
        return cy.get('[ng-model="pageData.queryListFilter"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    all_queries_link() {
        return cy.get('[ng-click="setQuerySet(\'All\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    executing_queries_link() {
        return cy.get('[ng-click="setQuerySet(\'Executing\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    failed_queries_link() {
        return cy.get('[ng-click="setQuerySet(\'Failed\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    execution_action_queries_link() {
        return cy.get('[ng-click="showExecutionActionSet()"');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    permissions_action_queries_link() {
        return cy.get('[ng-click="showPermissionsActionSet()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    templates_action_queries_link() {
        return cy.get('[ng-click="showTemplatesActionSet()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    subscriptions_action_queries_link() {
        return cy.get('[ng-click="showSubscriptionsActionSet()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    nodes_action_queries_link() {
        return cy.get('[ng-click="showNodesActionSet()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    expand_all_link() {
        return cy.get('[ng-click="expandAll()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    collapse_all_link() {
        return cy.get('[ng-click="collapseAll()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    queries_list() {
        return cy.get('query-list-table tbody tr');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    queries_status_list() {
        return cy.get('query-list-table tr [ng-class="{\'use-default-cursor\': !status.StatusDetail}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    queries_scopes_list() {
        return cy.get('.query-scope');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    loader() {
        return cy.get('.spinner-container > .spinner > .fa');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    queries_timings_popup() {
        return cy.get('.tippy-content tbody tr');
    }
}

export default PO_AdminRKS_Beacon_Queries;