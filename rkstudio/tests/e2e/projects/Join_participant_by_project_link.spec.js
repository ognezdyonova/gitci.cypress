/**
 * Joining a project - after each method, verify that participant displays in RKStudio
 * -Via Email invitation
 */

import TempMail from "../../../api_requests/temp_mail/TempMail";
import PO_Join_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Join_Participant_Web_page";
import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";
import PO_Welcome_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Welcome_Participant_Web_page";
import PO_Dashboard_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Dashboard_Participant_Web_page";
import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";
import PO_Project_Participants_list_Tab from "../../../pages/ResearchKitStudio/PO_Project_Participants_list_Tab";

describe('Joining a project - after each method, verify that participant displays in RKStudio\n  -Via Email invitation', () => {
    let project_name = 'test project for invite'.concat(new Date().getTime().toString());

    before('Add project', () => {
        cy.login();
        cy.add_project(project_name);
        cy.open_survey(project_name);
        let survey_page = new PO_Survey();
        survey_page
            .steps_list()
            .should("be.visible")
            .contains('Consent')
            .parents('[ng-repeat="step in template.steps"]')
            .find('[ng-click="deleteStep($index);"]')
            .click({force: true})

        survey_page
            .steps_list()
            .should("be.visible")
            .contains('Welcome')
            .parents('[ng-repeat="step in template.steps"]')
            .find('[ng-click="deleteStep($index);"]')
            .click({force: true})

        survey_page
            .steps_list()
            .should("be.visible")
            .contains('Eligibility')
            .parents('[ng-repeat="step in template.steps"]')
            .find('[ng-click="deleteStep($index);"]')
            .click({force: true})

        survey_page
            .steps_list()
            .should("be.visible")
            .contains('Demographics')
            .parents('[ng-repeat="step in template.steps"]')
            .find('[ng-click="deleteStep($index);"]')
            .click({force: true})

        survey_page
            .save_and_publish_new_version_button()
            .should("be.visible")
            .click({force: true});

        survey_page.save_and_publish_modal
            .projects_list()
            .should("be.visible")
            .contains(project_name)
            .parents('.project-content')
            .find('.diff-checkbox')
            .click({force: true});

        survey_page.save_and_publish_modal
            .confirm_button()
            .should("be.visible")
            .click({force: true})
            .and("not.be.visible");
    })

    after('remove created project', () => {
        cy.login();
        cy.open_project(project_name);
        cy.remove_paticipant();
        cy.remove_project(project_name);
    });

    it('Get Invite for a participant from email', () => {
        cy.open_project(project_name);
        let temp = new TempMail();

        let project = new PO_Project();
        project.settings_tab()
            .should("be.visible")
            .click({force: true});

        project.settings.menu_items()
            .should("be.visible")
            .contains('About')
            .click({force: true});

        project.settings.general_copy_project_url_button()
            .should("be.visible")
            .parents('span')
            .find('.ce-copyable-content')
            .then((el) => {
                Cypress.env('project_link', el.text())
            })

        temp.createAccount();
        temp.auth(cy.get('@account'));

        cy.get('@account')
            .then(l => {
                Cypress.env('account', l.address.toString())
            })

        cy.session('new_user_invite', () => {
            cy._origin(Cypress.env('project_link'), null);
            let participant_join_page = new PO_Join_Participant_Web_page();

            participant_join_page.email_input()
                .should("be.visible")
                .type(Cypress.env('account'));

            participant_join_page.join_button()
                .should("be.visible")
                .click({force: true});

            participant_join_page.password_input()
                .should("be.visible")
                .type('@Agent007');

            participant_join_page.join_button()
                .should("be.visible")
                .click({force: true});

            cy.wait(5000)

            let participant_welcome_page = new PO_Welcome_Participant_Web_page();
            participant_welcome_page
                .cancel_button()
                .should("be.visible");

            participant_welcome_page
                .agree_button()
                .should("be.visible")
                .click({force: true})

            participant_welcome_page
                .cancel_button()
                .should("be.visible")
                .click({force: true})

            let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
            participant_dashboard_page
                .logo()
                .should("be.visible");

            cy.wait(30000)
            temp.getMessages();
            temp.getMessage();
            cy.get('@message')
                .then((body) => {
                    cy.log(body)
                    expect(body.subject).to.contain("Verify your email address");
                    expect(body.to[0].address).to.contain(Cypress.env('account'));
                    expect(body.text).to.contain("Welcome to MyDataHelps!");
                    expect(body.text).to.contain("An account has been created for you with your email address " + Cypress.env('account'));
                    expect(body.text).to.contain("Click here to verify your email address");
                })
        })
    });

    it('Check joined participant', () => {
        cy.login();
        cy.open_project(project_name);

        let project = new PO_Project();
        project.participants_tab()
            .should("be.visible")
            .click({force: true});

        let participants = new PO_Project_Participants_list_Tab();

        participants.participants_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("include.text", Cypress.env('account'))
            .and("include.text", Cypress.moment().format('M/DD/YY'));
    });
})