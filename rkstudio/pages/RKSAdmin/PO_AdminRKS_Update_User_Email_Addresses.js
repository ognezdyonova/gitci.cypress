import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Update_User_Email_Addresses {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('.section-header');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    description() {
        return cy.get('.field-notes');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    old_email_input() {
        return cy.get('[ng-model="vm.oldEmail"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_email_input() {
        return cy.get('[ng-model="vm.newEmail"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    update_email_button() {
        return cy.get('[ng-click="vm.updateEmail()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    updated_status() {
        return cy.get('.status');
    }
}

export default PO_AdminRKS_Update_User_Email_Addresses;