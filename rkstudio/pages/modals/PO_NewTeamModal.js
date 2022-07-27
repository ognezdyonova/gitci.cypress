class PO_NewTeamModal {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('team-permissions-modal .modal-control-bar [ng-show="vm.team"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    description() {
        return cy.get('team-permissions-modal .permissions-description[ng-show="vm.team"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    name_input() {
        return cy.get('team-permissions-modal [ng-model="vm.team.Name"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    permission_checkbox() {
        return cy.get('team-permissions-modal .permission');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    choose_project_select() {
        return cy.get('team-permissions-modal [ng-model="vm.addStudyID"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_project_button() {
        return cy.get('team-permissions-modal [ng-click="vm.addStudyRelationship()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_button() {
        return cy.get('team-permissions-modal [ng-click="vm.save()"]');
    }

}

export default PO_NewTeamModal;