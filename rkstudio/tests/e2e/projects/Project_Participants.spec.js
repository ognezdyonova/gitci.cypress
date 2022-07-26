/**
 * - Export the project's data using CSV and then JSON (your coordinator user will need to have the Admin role)
 * - Delete a project (can't delete a project if it has participants; if there are participants, delete participants and then delete project)
 */
import PO_Project from "../../../pages/PO_Project";
import {test_participant} from "../../../constants/AuthData";
import PO_Project_Participants_list_Tab from "../../../pages/PO_Project_Participants_list_Tab";
import PO_Home from "../../../pages/PO_Home";
import PO_Projects from "../../../pages/PO_Projects";

describe('Export the project\'s data using CSV and then JSON (your coordinator user will need to have the Admin role) ', () => {
    let project_name = 'test project for export'.concat(new Date().getTime().toString());

    after('remove created project', () => {
        cy.remove_project(project_name);
    });

    it("Export the project's data using CSV and then JSON (your coordinator user will need to have the Admin role)", () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.invitations_tab()
            .should("be.visible")
            .click({force: true});

        project.invite_participants.paste_mode_button()
            .should("be.visible");

        project.invite_participants.csv_data_textarea()
            .should("be.visible")
            .type(test_participant);

        project.invite_participants.send_button()
            .should("be.visible")
            .click({force: true});

        project.invite_participants
            .invitations_modal
            .invitation_list()
            .should("be.visible")
            .and("include.text", 'jdoe@example.com')
            .and("include.text", 'John')
            .and("include.text", 'James');

        project.invite_participants
            .invitations_modal
            .send_invitation_button()
            .should("be.visible")
            .click({force: true});

        project.notification
            .message_info()
            .should("be.visible")
            .and("contain.text", '1 participants created, 0 updated');

        project.participants_tab()
            .should("be.visible")
            .click({force: true});

        let participants = new PO_Project_Participants_list_Tab();
        participants.participants_items()
            .should("be.visible")
            .and("include.text", 'jdoe@example.com')
            .and("include.text", 'John')
            .and("include.text", 'James');
    });

    it("Remove project with active participant", () => {
        let home = new PO_Home();
        home.header
            .projects_link()
            .should("be.visible")
            .click({force: true})

        let projects = new PO_Projects();
        projects.projects_list()
            .should("be.visible")
            .contains(project_name)
            .parents('.items-list-item')
            .find('.fa-trash')
            .click({force: true});

        projects.notification
            .message_error()
            .and("contain.text", 'Unable to delete because this project has active participants');

        projects.projects_list()
            .contains(project_name)
            .parents('.items-list-item')
            .should("be.visible");
    });

    it("Remove participant from project", () => {
        cy.open_project(project_name);

        let project = new PO_Project();
        project.participants_tab()
            .should("be.visible")
            .click({force: true});

        let participants = new PO_Project_Participants_list_Tab();
        participants.participants_items()
            .should("be.visible")
            .and("have.length", 1)
            .and('include.text', 'jdoe@example.com')
            .and("include.text", 'John')
            .and("include.text", 'James');

        participants.remove_buttons()
            .should("be.visible")
            .eq(0)
            .click({force: true})

        participants.participants_items()
            .should("not.be.visible")
    });

})