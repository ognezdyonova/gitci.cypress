import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Deployment_Administration {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_input() {
        return cy.get('#deployment-tree-filter');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('#WindowsServiceAdminScreen h1');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    status() {
        return cy.get('#WindowsServiceAdminScreen h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    start_service() {
        return cy.get('[ng-show="serviceStatus === \'Stopped\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    container() {
        return cy.get('.scrolling-table-inner-container');
    }
}

export default PO_AdminRKS_Deployment_Administration;