class PO_SelectInstrumentsToImportModal {

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('survey-import-from-file-modal .modal-control-bar span');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    instruments_list() {
        return cy.get('survey-import-from-file-modal .survey-list .survey-to-import');
    }

    /**
     * @param name name of survey
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[string]>>}
     */
    instrument_check(name) {
        return cy.get('survey-import-from-file-modal .survey-list .survey-to-import')
            .should("be.visible")
            .contains(name)
            .parents('.survey-to-import')
            .find('input');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    import_button() {
        return cy.get('survey-import-from-file-modal [ng-click="vm.import()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    message() {
        return cy.get('survey-import-from-file-modal .user-message');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    done_button() {
        return cy.get('.survey-import-from-file-modal > .modal-bottom-bar > .control-buttons > .editor-controls-button');
    }
}

export default PO_SelectInstrumentsToImportModal;