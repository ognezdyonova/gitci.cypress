class PO_Project_Activity_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    activity_type_select() {
        return cy.get('[ng-model="vm.selectedActivityType"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    delivery_status_select() {
        return cy.get('[ng-model="vm.deliveryStatus"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    notification_identifier_select() {
        return cy.get('[ng-model="vm.notificationIdentifier"]')
    }
}

export default PO_Project_Activity_Tab;