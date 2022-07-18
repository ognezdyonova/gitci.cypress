import PO_Header from "./PO_Header";

class PO_Notifications {

    constructor() {
        this.header = new PO_Header()
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_new_notification() {
        return cy.get('[ng-click="vm.addNotification()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    upload_new_notification() {
        return cy.get('[ng-click="vm.openUploadNotifications()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_input() {
        return cy.get('[ng-model="vm.searchText"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_type_select() {
        return cy.get('[ng-model="vm.searchType"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    notification_items() {
        return cy.get('.notification-table tbody [ng-click="vm.selectNotification(notification)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    prev_page_pagination_button() {
        return cy.get('.minimal-pagination-bar-wrapper [ng-click="vm.previousPage()"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    next_page_pagination_button() {
        return cy.get('.minimal-pagination-bar-wrapper [ng-click="vm.nextPage()"]')
    }
}

export default PO_Notifications;