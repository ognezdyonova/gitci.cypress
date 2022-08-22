/**
 * Cases:
 * - Go to {link} select the "Click here to register" link
 * - Verify participant email address
 * - Upload gif profile photo file
 * - Upload png profile photo file
 * - Upload jpg profile photo file
 * - Logout participant
 */

import {env} from "../../../support/utils";
import PO_Main_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Main_Participant_Web_page";
import PO_Join_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Join_Participant_Web_page";
import TempMail from "../../../api_requests/temp_mail/TempMail";
import PO_Welcome_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Welcome_Participant_Web_page";
import PO_Dashboard_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Dashboard_Participant_Web_page";
import PO_Login_Participant_Web_page from "../../../pages/ParticipantWeb/PO_Login_Participant_Web_page";

describe("MyFHR  tests", () => {
    before(() => {
        let temp = new TempMail();
        cy.open(env('WEB_BASE_URL_MY_FHR'));

        temp.createAccount();
        temp.auth(cy.get('@account'))

        cy.get('@token')
            .then(l => {
                Cypress.env('token_temp', l.token.toString())
            })

        cy.get('@account')
            .then(l => {
                Cypress.env('account', l.address.toString())
            })

        Cypress.env('first_n', 'test_first' + temp.makeHash_(5))
        Cypress.env('last_n', 'test_last' + temp.makeHash_(5))
    })

    it('Go to ' + env('WEB_BASE_URL_MY_FHR') + ' select the "Click here to register" link', () => {
        let participant_main_page = new PO_Main_Participant_Web_page();

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

        let participant_welcome_page = new PO_Welcome_Participant_Web_page();
        participant_welcome_page.cancel_button()
            .should("be.visible");

        participant_welcome_page.first_name_input()
            .should("be.visible")
            .type(Cypress.env('first_n'));

        participant_welcome_page.last_name_input()
            .should("be.visible")
            .type(Cypress.env('last_n'));

        participant_welcome_page.gender_select()
            .should("be.visible")
            .select('M');

        participant_welcome_page.date_input()
            .should("be.visible")
            .eq(1)
            .click();

        participant_welcome_page.last_name_input()
            .should("be.visible")
            .click();

        participant_welcome_page.continue_button()
            .should("be.visible")
            .click();

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();

        participant_dashboard_page.tabs()
            .should("contain.text", 'Me')
            .and("contain.text", 'Share')
            .and("contain.text", 'Timeline')
            .and("contain.text", 'More')
            .contains('Me')
            .parent('a')
            .and("have.class", 'selected');

        participant_dashboard_page.participant_name()
            .should("be.visible")
            .and("contain.text", Cypress.env('first_n') + ' ' + Cypress.env('last_n'));

        participant_dashboard_page.participant_email()
            .should("be.visible")
            .and("contain.text", Cypress.env('account'));

        participant_dashboard_page.verify_email_address_label()
            .should("be.visible")
            .and("contain.text", 'Please verify your email address');
    });

    it('Verify participant email address', () => {
        let temp = new TempMail();
        temp.getMessages();
        temp.getMessage();
        cy.get('@message')
            .then((body) => {
                cy.log(body)
                expect(body.subject).to.contain("Verify your email address");

                cy.wrap(temp.detectURLs(body.text))
                    .as('verify_link')
            });

        cy.get('@verify_link')
            .then(l => {
                cy.log(l)
                Cypress.env('verify_link', l.toString())
            })

        cy.session('user_verify_'.concat(temp.makeHash_(12)), () => {
            cy._origin(Cypress.env('verify_link'), null);
            let participant_login_page = new PO_Login_Participant_Web_page();
            participant_login_page.title()
                .should("be.visible");
            cy.wait(5000)
        })

        cy.open(env('WEB_BASE_URL_MY_FHR'));

        let participant_main_page = new PO_Main_Participant_Web_page();
        participant_main_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_login_page = new PO_Login_Participant_Web_page();
        participant_login_page.email_input()
            .should("be.visible")
            .type(Cypress.env('account'))

        participant_login_page.start_login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();

        participant_dashboard_page.tabs()
            .should("contain.text", 'Me')
            .and("contain.text", 'Share')
            .and("contain.text", 'Timeline')
            .and("contain.text", 'More')
            .contains('Me')
            .parent('a')
            .and("have.class", 'selected');

        participant_dashboard_page.participant_name()
            .should("be.visible")
            .and("contain.text", Cypress.env('first_n') + ' ' + Cypress.env('last_n'));

        participant_dashboard_page.participant_email()
            .should("be.visible")
            .and("contain.text", Cypress.env('account'));

        participant_dashboard_page.verify_email_address_label()
            .should("not.exist");
    });

    it('Upload gif profile photo file', () => {
        cy.open(env('WEB_BASE_URL_MY_FHR'));

        let participant_main_page = new PO_Main_Participant_Web_page();

        participant_main_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_login_page = new PO_Login_Participant_Web_page();
        participant_login_page.email_input()
            .should("be.visible")
            .type(Cypress.env('account'))

        participant_login_page.start_login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user3.gif')

        participant_dashboard_page
            .profile_photo_error()
            .should("be.visible")
            .and("contain.text", 'error-uploading-photo');
    });

    it('Upload png profile photo file', () => {
        cy.open(env('WEB_BASE_URL_MY_FHR'));

        let participant_main_page = new PO_Main_Participant_Web_page();

        participant_main_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_login_page = new PO_Login_Participant_Web_page();
        participant_login_page.email_input()
            .should("be.visible")
            .type(Cypress.env('account'))

        participant_login_page.start_login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user2.png')

        participant_dashboard_page
            .profile_photo_error()
            .should("not.be.visible");
    });

    it('Upload jpg profile photo file', () => {
        //cas9t@arxxwalls.com
        Cypress.env('account','cas9t@arxxwalls.com')
        cy.open(env('WEB_BASE_URL_MY_FHR'));

        let participant_main_page = new PO_Main_Participant_Web_page();

        participant_main_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_login_page = new PO_Login_Participant_Web_page();
        participant_login_page.email_input()
            .should("be.visible")
            .type(Cypress.env('account'))

        participant_login_page.start_login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user2.png')

        participant_dashboard_page
            .profile_photo_error()
            .should("not.be.visible");
    });

    it('Logout participant', () => {
        Cypress.env('account', 'ioaqb@arxxwalls.com')
        cy.open(env('WEB_BASE_URL_MY_FHR'));

        let participant_main_page = new PO_Main_Participant_Web_page();

        participant_main_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_login_page = new PO_Login_Participant_Web_page();
        participant_login_page.email_input()
            .should("be.visible")
            .type(Cypress.env('account'))

        participant_login_page.start_login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        let participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
        participant_dashboard_page.tabs()
            .should("contain.text", 'Me')
            .and("contain.text", 'Share')
            .and("contain.text", 'Timeline')
            .and("contain.text", 'More')
            .contains('Me')
            .parent('a')
            .and("have.class", 'selected');

        participant_dashboard_page.participant_email()
            .should("be.visible")
            .and("contain.text", Cypress.env('account'));

        participant_dashboard_page.logout_link()
            .should("be.visible")
            .click({force:true});

        participant_login_page.password_input()
            .should("be.visible");

        participant_login_page.login_button()
            .should("be.visible");
    });
})