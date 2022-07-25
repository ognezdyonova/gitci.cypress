import PO_Header from "./PO_Header";
import PO_Notification from "./PO_Notification";

class PO_Projects {
    constructor() {
        this.header = new PO_Header();
        this.notification = new PO_Notification();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_project_name_input() {
        return cy.get('[ng-model="newProjectName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_project_create_button() {
        return cy.get('[ng-click="addProject(newProjectName)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_list() {
        return cy.get('.items-list-item');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    copy_project_button() {
        return cy.get('[ng-click="showCopyModal(project.id, project.name);$event.stopPropagation();"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    delete_project_button() {
        return cy.get('[ng-click="deleteProject(project.id);$event.stopPropagation();"]');
    }
}

export default PO_Projects;