class PO_Project_Schedules_Tab {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    list_view_button() {
        return cy.get('.view-switch [ng-class="{selected:viewMode == \'list\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    table_view_button() {
        return cy.get('.view-switch [ng-class="{selected:viewMode == \'table\'}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    search_schedules_input() {
        return cy.get('[ng-model="searchText"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    segment_filter_select() {
        return cy.get('[ng-model="segmentFilter"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    action_filter_select() {
        return cy.get('[ng-model="actionFilter"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_schedule_button() {
        return cy.get('.add-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    new_schedule_from_list_button() {
        return cy.get('button[ng-click="newSchedule()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    schedule_items() {
        return cy.get('.schedule-list-item');
    }
}

export default PO_Project_Schedules_Tab;