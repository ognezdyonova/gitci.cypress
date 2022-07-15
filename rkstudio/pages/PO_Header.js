class PO_Header {
    current_organization() {
        return cy.get('.current-organization');
    }

    organization_switcher_link() {
        return cy.get('.organization-switcher');
    }

    organization_switcher_dropdown_item_link() {
        return cy.get('.organization-switcher-dropdown-item');
    }

    navigation_link() {
        return cy.get('.navigation-link');
    }

    project_nav_link() {
        cy.get('.projects-nav .navigation-link');
    }

    project_sub_nav_settings_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-gear');
    }

    project_sub_nav_sensor_and_ehr_data_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-heartbeat');
    }

    project_sub_nav_app_layout_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-mobile-phone');
    }

    project_sub_nav_schedules_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-calendar');
    }

    project_sub_nav_invite_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-plus-circle');
    }

    project_sub_nav_participants_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-users');
    }

    project_sub_nav_activity_link() {
        cy.get('.projects-nav .projects-sub-nav .fa-search');
    }

    user_link() {
        return cy.get('.fa-user');
    }

    user_profile_link() {
        return cy.get('.fa-gear');
    }

    user_sign_out_link() {
        return cy.get('.fa-sign-out');
    }

    help_link() {
        return cy.get('.fa-question-circle');
    }
}

export default PO_Header;