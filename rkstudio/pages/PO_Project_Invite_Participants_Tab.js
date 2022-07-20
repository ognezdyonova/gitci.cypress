class PO_Project_Invite_Participants_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    paste_mode_button() {
        return cy.get('[ng-click="vm.setMode(vm.Modes.Paste)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    file_mode_button() {
        return cy.get('[ng-click="vm.setMode(vm.Modes.File)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    csv_data_textarea() {
        return cy.get('[ng-model="vm.csvData"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    upload_file_input() {
        return cy.get('.file-container .rk-file-input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    send_button() {
        return cy.get('.csv-area > .confirm-button');
    }
}

export default PO_Project_Invite_Participants_Tab;