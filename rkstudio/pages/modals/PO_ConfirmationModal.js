class PO_ConfirmationModal {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('confirmation-dialog .modal-control-bar');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    description_label() {
        return cy.get('confirmation-dialog .body');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirm_button() {
        return cy.get('confirmation-dialog [ng-click="vm.onConfirm()"]');
    }
}

export default PO_ConfirmationModal;