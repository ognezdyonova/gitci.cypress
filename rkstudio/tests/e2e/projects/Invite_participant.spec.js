/**
 * Invite a participant (invite yourself as a test participant)
 * After participant completes the consent survey  and then the enrollment survey using MDH - confirm participant data is correct in RKS (Survey Results tab) and that the task (survey) is marked as complete (Task List tab)
 * If you are using iOS to validate; verify MDH Dashboard displays sensor data
 */

import TempMail from "../../../api_requests/temp_mail/TempMail";
import PO_Main_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Main_Participant_Web_page";
import PO_Join_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Join_Participant_Web_page";
import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";
import PO_Welcome_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Welcome_Participant_Web_page";
import PO_Dashboard_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Dashboard_Participant_Web_page";

describe('Invite a participant', () => {
    let project_name = 'test project for invite'.concat(new Date().getTime().toString());

    after('remove created project', () => {
        cy.login();
        cy.open_project(project_name);
        cy.remove_paticipant();
        cy.remove_project(project_name);
    });

    it('Invite a participant', () => {
        cy.login();
        let temp = new TempMail();
        cy.add_project(project_name);
        cy.add_real_participant();
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

        cy.wait(10000)

        temp.getMessages();
        temp.getMessage();
        cy.get('@message')
            .then((body) => {
                cy.log(body)
                expect(body.text).to.contain("You've been invited to join");
                const doc = new DOMParser().parseFromString(body.html[0], 'text/html');
                const hrefs = Array.from(
                    doc.querySelectorAll('[href]'),
                    element => element.getAttribute('href')
                );
                cy.wrap(hrefs.find(el => el.includes('mydatahelps.org')))
                    .as('mydatahelps_link')
            })


        cy.get('@mydatahelps_link')
            .then(l => {
                Cypress.env('mydatahelps_link', l.toString())
            })

        cy.get('@account')
            .then(l => {
                Cypress.env('account', l.address.toString())
            })
    });

    it('test2', () => {
        cy.session('new_user', () => {

            cy._origin(Cypress.env('mydatahelps_link'), null)
            let participant_main_page = new PO_Main_Participant_Web_page();
            participant_main_page
                .logo()
                .should("be.visible");

            participant_main_page
                .login_button()
                .should("be.visible");

            participant_main_page
                .join_button()
                .should("be.visible")
                .click({force: true});

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

            let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
            participant_dashboard_page
                .logo()
                .should("be.visible");
            participant_dashboard_page
                .update_profile_link()
                .should("be.visible");

        })
    });
})