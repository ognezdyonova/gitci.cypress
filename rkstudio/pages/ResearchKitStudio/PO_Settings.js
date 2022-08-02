import PO_Header from "./PO_Header";
import PO_NewTeamModal from "./modals/PO_NewTeamModal";

class PO_Settings {
    constructor() {
        this.header = new PO_Header();
        this.new_team_modal = new PO_NewTeamModal();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('h2');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSection == \'settings\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_access_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSection == \'userAccess\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    teams_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSection == \'teams\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    service_accounts_tab() {
        return cy.get('[ng-class="{selected:vm.selectedSection == \'serviceAccounts\'}"]');
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
    teams_items() {
        return cy.get('[ng-show="vm.selectedSection == \'teams\'"] tbody tr');
    }

    /**
     * Get edit team button
     * @param name - name of team
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    edit_team(name) {
        return this.teams_items()
            .should("be.visible")
            .contains(name)
            .parents('tr')
            .find('[ng-click="vm.selectedTeam = team"]')
    }

    /**
     * Get remove team button
     * @param name - name of team
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    remove_team(name) {
        return this.teams_items()
            .should("be.visible")
            .contains(name)
            .parents('tr')
            .find('[ng-click="vm.deleteTeam(team)"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_team_button() {
        return cy.get('[ng-click="vm.startTeamAdd()"]');
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