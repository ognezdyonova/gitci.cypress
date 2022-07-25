class PO_Project_Participants_list_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    participants_items() {
        return cy.get('[ng-click="vm.selectParticipant(participant)"]')
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    remove_buttons() {
        return cy.get('[ng-click="vm.deleteParticipant(participant.id); $event.stopPropagation();"]')
    }
}

export default PO_Project_Participants_list_Tab;