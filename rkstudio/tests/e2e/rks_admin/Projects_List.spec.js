/**
 * Projects List:
 *
 * - Projects list elements
 * - Search for projects
 * - Paging works
 * - Dynamic Visualizations
 * 1.Select an existing one, the details display
 * 2.Add one - but do not publish, delete the one you added
 * - Open project
 * - Not Change/Update user email
 */

import PO_AdminRKS_Projects from "../../../pages/RKSAdmin/PO_AdminRKS_Projects";
import PO_AdminRKS_Project from "../../../pages/RKSAdmin/PO_AdminRKS_Project";
import PO_AdminRKS_Update_User_Email_Addresses from "../../../pages/RKSAdmin/PO_AdminRKS_Update_User_Email_Addresses";
import PO_Project_Participants_list_Tab from "../../../pages/ResearchKitStudio/PO_Project_Participants_list_Tab";
import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";

describe('RKS Admin: Project list', () => {
    let project_name = 'test project '.concat(new Date().getTime().toString());

    it('Projects list elements', () => {
        cy.login(null, null, 'RKStudio Admin');

        let projects = new PO_AdminRKS_Projects();

        projects.header
            .navigation_buttons()
            .should("be.visible");

        projects.header
            .navigation_button('Recent Patients')
            .should("be.visible");

        projects.header
            .navigation_button('My Patient Lists')
            .should("be.visible");

        projects.header
            .navigation_button('Beacon Surveillance')
            .should("be.visible");

        projects.header
            .navigation_button('Administration')
            .should("be.visible");

        projects.header
            .navigation_button('Provide Feedback')
            .should("be.visible");

        projects.header
            .navigation_tabs()
            .should("be.visible");

        projects.header
            .navigation_tab('Projects')
            .should("be.visible");

        projects.header
            .navigation_tab('Users and Participants')
            .should("be.visible");

        projects.header
            .global_search_input()
            .should("be.visible");

        projects.search_input()
            .should("be.visible");

        projects.projects_list()
            .should("be.visible");

        projects.pagination_bar()
            .should("be.visible");

        projects.pagination_prev_button()
            .should("be.visible");

        projects.pagination_next_button()
            .should("be.visible");
    });

    it('Search for projects', () => {
        cy.login(null, null, 'RKStudio Admin');

        let projects = new PO_AdminRKS_Projects();

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.search_input()
            .should("be.visible")
            .type('Alt test');

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 1);

        projects.pagination_bar()
            .should("not.exist");

        projects.pagination_prev_button()
            .should("not.exist");

        projects.pagination_next_button()
            .should("not.exist");
    });

    it('Paging works', () => {
        cy.login(null, null, 'RKStudio Admin');

        let projects = new PO_AdminRKS_Projects();

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.pagination_bar()
            .should("be.visible")
            .and("contain.text", 'Viewing 1 - 10');

        projects.pagination_prev_button()
            .should("be.visible")
            .and("be.disabled");

        projects.pagination_next_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.pagination_bar()
            .should("be.visible")
            .and("contain.text", 'Viewing 11 - 20');

        projects.pagination_prev_button()
            .should("be.visible")
            .and("not.be.disabled");

        projects.pagination_next_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.pagination_bar()
            .should("be.visible")
            .and("contain.text", 'Viewing 21 - 30');

        projects.pagination_prev_button()
            .should("be.visible")
            .and("not.be.disabled");

        projects.pagination_next_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.pagination_bar()
            .should("be.visible")
            .and("contain.text", 'Viewing 31 - 40');

        projects.pagination_prev_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        projects.pagination_prev_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        projects.pagination_prev_button()
            .should("be.visible")
            .and("not.be.disabled")
            .click({force: true});

        projects.pagination_bar()
            .should("be.visible")
            .and("contain.text", 'Viewing 1 - 10');

        projects.pagination_prev_button()
            .should("be.visible")
            .and("be.disabled");

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);
    });

    it("Open project", () => {
        cy.login(null, null, 'RKStudio Admin');

        let projects = new PO_AdminRKS_Projects();

        projects.projects_list()
            .should("be.visible")
            .and("have.length", 10);

        projects.search_input()
            .should("be.visible")
            .type('Alt test');

        projects.projects_list()
            .should("have.length", 1)
            .eq(0)
            .click({force: true});

        let project = new PO_AdminRKS_Project();

        project.header
            .navigation_buttons()
            .should("be.visible");

        project.header
            .navigation_button('Recent Patients')
            .should("be.visible");

        project.header
            .navigation_button('My Patient Lists')
            .should("be.visible");

        project.header
            .navigation_button('Beacon Surveillance')
            .should("be.visible");

        project.header
            .navigation_button('Administration')
            .should("be.visible");

        project.header
            .navigation_button('Provide Feedback')
            .should("be.visible");

        project.header
            .navigation_tabs()
            .should("be.visible");

        project.header
            .navigation_tab('Projects')
            .should("be.visible");

        project.header
            .navigation_tab('Users and Participants')
            .should("be.visible");

        project.header
            .global_search_input()
            .should("be.visible");

        project.surveys_list()
            .should("be.visible")
            .and("have.length.above", 0)
    });

    it("Not Change/Update user email", () => {
        cy.add_project(project_name);
        cy.add_paticipant();

        cy.login(null, null, 'RKStudio Admin');
        let projects = new PO_AdminRKS_Projects();
        projects.header
            .navigation_tab('Users and Participants')
            .should("be.visible")
            .click({force: true});

        let update_email = new PO_AdminRKS_Update_User_Email_Addresses();
        update_email.header
            .navigation_buttons()
            .should("be.visible");

        update_email.header
            .navigation_button('Recent Patients')
            .should("be.visible");

        update_email.header
            .navigation_button('My Patient Lists')
            .should("be.visible");

        update_email.header
            .navigation_button('Beacon Surveillance')
            .should("be.visible");

        update_email.header
            .navigation_button('Administration')
            .should("be.visible");

        update_email.header
            .navigation_button('Provide Feedback')
            .should("be.visible");

        update_email.header
            .navigation_tabs()
            .should("be.visible");

        update_email.header
            .navigation_tab('Projects')
            .should("be.visible");

        update_email.header
            .navigation_tab('Users and Participants')
            .should("be.visible");

        update_email.header
            .global_search_input()
            .should("be.visible");

        update_email.title()
            .should("be.visible")
            .and("contain.text", 'Update User/Patient Email Addresses');

        update_email.description()
            .should("be.visible");

        update_email.old_email_input()
            .should("be.visible")
            .type('jdoe@example.com');

        update_email.new_email_input()
            .should("be.visible")
            .type('updatedjdoe@example.com');

        update_email.update_email_button()
            .should("be.visible")
            .click({force: true});

        update_email.updated_status()
            .should("be.visible")
            .and("contain.text", 'Found 0 users with email \'' + 'jdoe@example.com' + '\'')
            .click({force: true});

        cy.login();
        cy.open_project(project_name);

        let project = new PO_Project();
        project.participants_tab()
            .should("be.visible")
            .click({force: true});

        let participants = new PO_Project_Participants_list_Tab();
        participants.participants_items()
            .should("be.visible")
            .and("include.text", 'jdoe@example.com')
            .and("include.text", 'John')
            .and("include.text", 'James');

        cy.remove_paticipant();
        cy.remove_project(project_name);
    });
})
