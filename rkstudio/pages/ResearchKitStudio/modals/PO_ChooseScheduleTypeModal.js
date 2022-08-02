class PO_ChooseScheduleTypeModal {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    title() {
        return cy.get('.schedule-type-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    close_button() {
        return cy.get('[ng-click="cancelEditing()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    onEnrollment_button() {
        return cy.get('[ng-click="initSchedule(\'OnEnrollment\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    onEnteringSegment_button() {
        return cy.get('[ng-click="segments.Segments.length && initSchedule(\'OnEnteringSegment\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    eventBased_button() {
        return cy.get('[ng-click="initSchedule(\'EventBased\')"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    dateBased_button() {
        return cy.get('[ng-click="initSchedule(\'DateBased\')"]');
    }
}

export default PO_ChooseScheduleTypeModal;