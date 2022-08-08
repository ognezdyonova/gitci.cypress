import PO_ParticipantInfoPreview from "./modals/PO_ParticipantInfoPreview";

class PO_Project_Participants_list_Tab {
    constructor() {
        this.participant_info = new PO_ParticipantInfoPreview();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participants_items() {
        return cy.get('[ng-click="vm.selectParticipant(participant)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    no_results_line() {
        return cy.get('tbody > :nth-child(2) > .ng-scope');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    remove_buttons() {
        return cy.get('[ng-click="vm.deleteParticipant(participant.id); $event.stopPropagation();"]');
    }
}

export default PO_Project_Participants_list_Tab;