import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Projects {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_input() {
        return cy.get('#current-panel .search-bar input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_list() {
        return cy.get('#current-panel table tbody tr.drillable');
    }

    /**
     * @param name name of project
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[string]>>}
     */
    project_line(name) {
        return cy.get('#current-panel table tbody tr.drillable')
            .should("be.visible")
            .contains(name)
            .parents('tr');
    }

    /**
     * @param name name of project
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_toggle_license_button(name) {
        return cy.get('#current-panel table tbody tr.drillable')
            .should("be.visible")
            .contains(name)
            .parents('tr')
            .find('[ng-click="vm.toggleLicense(project); $event.stopPropagation();"]');
    }

    /**
     * @param name name of project
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_customize_healthKit_data_button(name) {
        return cy.get('#current-panel table tbody tr.drillable')
            .should("be.visible")
            .contains(name)
            .parents('tr')
            .find('[ng-click="vm.createCustomHealthKitRetentionConfiguration(project); $event.stopPropagation();"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    pagination_bar() {
        return cy.get('.minimal-pagination-bar');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    pagination_prev_button() {
        return cy.get('[ng-click="vm.previousPage()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    pagination_next_button() {
        return cy.get('[ng-click="vm.nextPage()"]');
    }
}

export default PO_AdminRKS_Projects;