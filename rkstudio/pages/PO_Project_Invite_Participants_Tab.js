class PO_Project_Invite_Participants_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    paste_mode_button() {
        return cy.get('[ng-class="{selected:vm.inputMode === vm.Modes.Paste}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    file_mode_button() {
        return cy.get('[ng-class="{selected:vm.inputMode === vm.Modes.File}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    csv_data_textarea() {
        return cy.get('[ng-model="vm.csvData"]');
    }
}

export default PO_Project_Invite_Participants_Tab;