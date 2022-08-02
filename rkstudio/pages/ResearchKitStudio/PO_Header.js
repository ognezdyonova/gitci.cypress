class PO_Header {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    current_organization() {
        return cy.get('.current-organization');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    organization_switcher_link() {
        return cy.get('.organization-switcher');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    organization_switcher_dropdown_item_link() {
        return cy.get('.organization-switcher-dropdown-item');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    home_link() {
        return cy.get('[ng-if="vm.layoutContext.CurrentResearchOrganizationNavigation.HomeUrl"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    projects_link() {
        return cy.get('.projects-nav-item [title="Projects"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    surveys_link() {
        return cy.get('[title="Surveys"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    notifications_link() {
        return cy.get('[title="Notifications"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_link() {
        return cy.get('[title="Settings"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_nav_link() {
        return cy.get('.projects-nav .navigation-link');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_settings_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-gear');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_sensor_and_ehr_data_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-heartbeat');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_app_layout_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-mobile-phone');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_schedules_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-calendar');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_invite_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-plus-circle');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_participants_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-users');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    project_sub_nav_activity_link() {
        return cy.get('.projects-nav .projects-sub-nav .fa-search');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_link() {
        return cy.get('.fa-user').parents('.navigation-link');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_profile_link() {
        return cy.get('.nav-dropdown .fa-gear').parents('a');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    user_sign_out_link() {
        return cy.get('.fa-sign-out');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    help_link() {
        return cy.get('.fa-question-circle');
    }
}

export default PO_Header;