/**
 * Projects List:
 *
 * - Projects list elements
 * - Search for projects
 * - Paging works
 * - Dynamic Visualizations
 * 1.Select an existing one, the details display
 * 2.Add one - but do not publish, delete the one you added
 */

import PO_AdminRKS_Projects from "../../../pages/RKSAdmin/PO_AdminRKS_Projects";
import PO_AdminRKS_Project from "../../../pages/RKSAdmin/PO_AdminRKS_Project";

describe('RKS Admin: Project list', () => {
    beforeEach('Open RKS admin', () => {
        cy.login(null, null, 'RKStudio Admin');

    });

    it('Projects list elements', () => {
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
            .click({force:true});

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
            .and("have.length.above",0)
    });
})
