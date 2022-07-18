import PO_Header from "./PO_Header";

class PO_Settings {
    constructor() {
        this.header = new PO_Header()
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('.settings > h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    section_items() {
        return cy.get('.section-select a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    display_name_input() {
        return cy.get('[ng-model="vm.getLocalizableEditModel(vm.nameLocale).Name"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    display_name_local_select() {
        return cy.get('[ng-model="vm.nameLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    upload_logo_input() {
        return cy.get('[file-model="vm.file"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    org_color_input() {
        return cy.get('[ng-model="vm.organization.HexColor"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    org_description_textarea() {
        return cy.get('[ng-model="vm.getLocalizableEditModel(vm.descriptionLocale).Description"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    org_description_local() {
        return cy.get('[ng-model="vm.descriptionLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_changes_button() {
        return cy.get('[ng-click="vm.save(vm.organization)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_access_items() {
        return cy.get('[ng-repeat="user in vm.users | orderBy:\'UserName\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_invitation_items() {
        return cy.get('[ng-repeat="invitation in vm.invitations | orderBy:\'Email\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_access_username_input() {
        return cy.get('[ng-model="vm.newUserName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_access_username_save_button() {
        return cy.get('[ng-click="vm.confirmUser(vm.newUserName)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    terms_items() {
        return cy.get('[ng-show="vm.selectedSection == \'teams\'"] tbody tr');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_terms_button() {
        return cy.get('[ng-show="vm.selectedSection == \'teams\'"] [ng-click="vm.startTeamAdd()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    service_accounts_items() {
        return cy.get('[ng-repeat="account in vm.serviceAccounts | orderBy:\'Name\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_service_accounts_input() {
        return cy.get('[ng-model="vm.newServiceAccountName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_service_account_button() {
        return cy.get('[ng-click="vm.addServiceAccount(vm.newServiceAccountName)"]');
    }
}

export default PO_Settings;