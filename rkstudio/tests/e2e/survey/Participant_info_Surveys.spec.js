/**
 * CASES:
 * - Participant info elements available
 * - Complete survey from the Task list tab
 * - Close survey from the Task list tab
 * */


import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";

describe("Participant survey ", () => {
    let project_name = 'test project for export'.concat(new Date().getTime().toString());

    beforeEach(() => {
        cy.login();
    })

    afterEach('Remove survey', () => {
        cy.open_project(project_name);
        cy.remove_paticipant();
        cy.remove_project(project_name);
    });

    it("Participant info elements available", () => {
        cy.add_project(project_name);
        cy.add_paticipant();

        let project = new PO_Project();

        project.participants_tab()
            .click({force: true});

        project.participants_list
            .participants_items()
            .should("be.visible")
            .and("have.length", 1)
            .eq(0)
            .click({force: true});


        project.participants_list
            .participant_info
            .name()
            .should("be.visible");

        project.participants_list
            .participant_info
            .tabs()
            .should("be.visible")
            .contains('Task List')
            .click({force: true});

        project.participants_list
            .participant_info
            .survey_select()
            .should("be.visible");

        project.participants_list
            .participant_info
            .filter_by_status_select()
            .should("be.visible");

        project.participants_list
            .participant_info
            .survey_select()
            .should("be.visible");

        project.participants_list
            .participant_info
            .survey_interval_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .survey_interval_select()
            .should("be.visible");

        project.participants_list
            .participant_info
            .add_survey_interval_button()
            .should("be.visible");

        project.participants_list
            .participant_info
            .tabs()
            .should("be.visible")
            .contains('Survey Results')
            .click({force: true});

        project.participants_list
            .participant_info
            .no_results_survey_message()
            .should("be.visible")
            .and("contain.text", 'No Survey Responses');

        project.participants_list
            .participant_info
            .tabs()
            .should("be.visible")
            .contains('Participant Info')
            .click({force: true});

        project.participants_list
            .participant_info
            .participant_info_invitation_select()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_id_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_email_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_phone_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_first_name_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_middle_name_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .participant_info_last_name_input()
            .should("be.visible");

        project.participants_list
            .participant_info
            .close_button()
            .should("be.visible")
            .click({force: true});
    });

    it("Complete survey task ", () => {
        cy.add_project(project_name);
        cy.add_paticipant();

        let project = new PO_Project();

        project.participants_tab()
            .click({force: true});

        project.participants_list
            .participants_items()
            .should("be.visible")
            .and("have.length", 1)
            .eq(0)
            .click({force: true});


        project.participants_list
            .participant_info
            .name()
            .should("be.visible")
            .and("contain.text", 'Doe, John James');

        project.participants_list
            .participant_info
            .email()
            .should("be.visible")
            .and("contain.text", 'jdoe@example.com');

        project.participants_list
            .participant_info
            .phone()
            .should("be.visible")
            .and("contain.text", '(555) 555-5555');

        project.participants_list
            .participant_info
            .dob()
            .should("be.visible")
            .and("contain.text", '1965-04-15');

        project.participants_list
            .participant_info
            .id()
            .should("be.visible")
            .and("contain.text", '1234593889238');

        project.participants_list
            .participant_info
            .tabs()
            .should("be.visible")
            .contains('Task List')
            .click({force: true});

        project.participants_list
            .participant_info
            .survey_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.participants_list
            .participant_info
            .add_survey_interval_button()
            .should("be.visible")
            .click({force: true});

        project.participants_list
            .participant_info
            .tasks_list()
            .should("be.visible")
            .eq(0)
            .and("contain.text", project_name.concat(' Project Consent'))
            .and("contain.text", 'Incomplete')
            .find('[ng-click="vm.completeTask(task)"]')
            .click({force: true});

        project.participants_list
            .participant_info
            .tasks_list()
            .should("be.visible")
            .eq(0)
            .and("contain.text", project_name.concat(' Project Consent'))
            .and("contain.text", 'Complete')

        project.participants_list
            .participant_info
            .close_button()
            .should("be.visible")
            .click({force: true});
    });

    it("Close survey task ", () => {
        cy.add_project(project_name);
        cy.add_paticipant();

        let project = new PO_Project();

        project.participants_tab()
            .click({force: true});

        project.participants_list
            .participants_items()
            .should("be.visible")
            .and("have.length", 1)
            .eq(0)
            .click({force: true});


        project.participants_list
            .participant_info
            .name()
            .should("be.visible")
            .and("contain.text", 'Doe, John James');

        project.participants_list
            .participant_info
            .email()
            .should("be.visible")
            .and("contain.text", 'jdoe@example.com');

        project.participants_list
            .participant_info
            .phone()
            .should("be.visible")
            .and("contain.text", '(555) 555-5555');

        project.participants_list
            .participant_info
            .dob()
            .should("be.visible")
            .and("contain.text", '1965-04-15');

        project.participants_list
            .participant_info
            .id()
            .should("be.visible")
            .and("contain.text", '1234593889238');

        project.participants_list
            .participant_info
            .tabs()
            .should("be.visible")
            .contains('Task List')
            .click({force: true});

        project.participants_list
            .participant_info
            .survey_select()
            .should("be.visible")
            .select(project_name.concat(' Project Consent'));

        project.participants_list
            .participant_info
            .add_survey_interval_button()
            .should("be.visible")
            .click({force: true});

        project.participants_list
            .participant_info
            .tasks_list()
            .should("be.visible")
            .eq(0)
            .and("contain.text", project_name.concat(' Project Consent'))
            .and("contain.text", 'Incomplete')
            .find('[ng-click="vm.closeTask(task)"]')
            .click({force: true});

        project.participants_list
            .participant_info
            .tasks_list()
            .should("be.visible")
            .eq(0)
            .and("contain.text", project_name.concat(' Project Consent'))
            .and("contain.text", 'Closed');

        project.participants_list
            .participant_info
            .close_button()
            .should("be.visible")
            .click({force: true});
    });

});

