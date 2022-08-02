class PO_SaveAndPublishModal {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    publish_versions_header() {
        return cy.get('publish-confirm-modal .modal-control-bar .dialog-header');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    description_label() {
        return cy.get('publish-confirm-modal .dialog-body .dialog-header');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_list() {
        return cy.get('publish-confirm-modal .project-list .project');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    confirm_button() {
        return cy.get('publish-confirm-modal .modal-bottom-bar button');
    }
}

export default PO_SaveAndPublishModal;