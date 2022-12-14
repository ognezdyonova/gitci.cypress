/**
 * Cases:
 * - Go to {link} select the "Click here to register" link
 * - Verify participant email address
 * - Upload gif profile photo file
 * - Upload png profile photo file
 * - Upload jpg profile photo file
 * - Add notes data
 * - check Providers list: elements, searching
 * - Sharing page
 * - Timeline page: check elements, open timeline
 * - More page: check elements
 * - More page: contact support
 * - More page: update profile
 * - More page: Download / Share Health Record
 * - Logout participant
 * - More page: Cancel account
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
        cy.task('cleanupDownloads');

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
        participant_dashboard_page
            .loader()
            .should("not.be.visible");

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
        participant_dashboard_page
            .loader()
            .should("not.be.visible");

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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user3.gif')

        participant_dashboard_page
            .error_message()
            .should("be.visible")
            .and("contain.text", 'There was an error uploading your photo. Please try again.');
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user2.png')

        participant_dashboard_page
            .error_message()
            .should("not.be.visible");
    });

    it('Upload jpg profile photo file', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .profile_photo()
            .should("be.visible")
            .find('input[type="file"]')
            .attachFile('upload_files/user2.png')

        participant_dashboard_page
            .error_message()
            .should("not.be.visible");
    });

    it('Add notes data', () => {
        let note_data = 'Test notes ' + new TempMail().makeHash_(12);

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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .clear()
            .type(note_data)
            .type('{enter}')
            .wait(2000);

        cy.reload();

        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .and("have.value", note_data);

        participant_dashboard_page.logout_link()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .and("have.value", note_data);


        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .clear()
            .type('{enter}');

        cy.reload();

        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .and("have.value", '');

        participant_dashboard_page.logout_link()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007')

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .note_input()
            .should("be.visible")
            .and("have.value", '');
    });

    it('check Providers list: elements, searching', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .health_profile_section()
            .should("be.visible")
            .click({force: true})

        participant_dashboard_page
            .providers_search_input()
            .should("be.visible");

        cy.get('body').then(($body) => {
            if ($body.find('.provider').length) {
                participant_dashboard_page
                    .providers_list()
                    .should("be.visible")
                    .and("have.length.above", 1);

                participant_dashboard_page
                    .providers_search_input()
                    .should("be.visible")
                    .type('test');

                participant_dashboard_page
                    .providers_list()
                    .should("be.visible")
                    .and("have.length.above", 1)
                    .and("include.text", 'test');

                participant_dashboard_page
                    .providers_search_input()
                    .should("be.visible")
                    .clear()
                    .type(new TempMail().makeHash_(5));

                participant_dashboard_page
                    .providers_list()
                    .should("not.exist");
            } else {
                participant_dashboard_page
                    .providers_list_no_results()
                    .should("be.visible")
                    .and("contain.text", 'No results')
            }
        });
    });

    it('Sharing page', () => {
        cy.session('sharing_dashboard' + new TempMail().makeHash_(4), () => {
            let temp = new TempMail();
            cy.visit(env('WEB_BASE_URL_MY_FHR'));

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

            temp.createAccount();
            temp.auth(cy.get('@account'));

            participant_dashboard_page
                .loader()
                .should("not.be.visible");

            participant_dashboard_page
                .tabs()
                .contains('Share')
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page
                .title_page()
                .should("be.visible")
                .and("contain.text", 'Share')

            participant_dashboard_page.share_email_input()
                .should("be.visible");

            participant_dashboard_page.share_send_request_button()
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page.error_message()
                .should("be.visible")
                .and("contain.text", 'Invalid email address');

            participant_dashboard_page.share_email_input()
                .should("be.visible")
                .clear()
                .type(temp.makeHash_(5));

            participant_dashboard_page.share_send_request_button()
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page.error_message()
                .should("be.visible")
                .and("contain.text", 'Invalid email address');

            cy.get('@account')
                .then(l => {
                    participant_dashboard_page.share_email_input()
                        .should("be.visible")
                        .clear()
                        .type(l.address.toString());
                })

            participant_dashboard_page.share_request_type_select()
                .should("be.visible")
                .select('access');

            participant_dashboard_page.share_send_request_button()
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page.shared_accounts_list()
                .should("be.visible")
                .and("have.length", 1);

            cy.wait(15000);
            cy.get('@token')
                .then(l => {
                    temp.getMessagesByToken(l.token.toString())
                })

            cy.get('@messages')
                .then((body) => {
                    cy.log(body)
                    expect(body.length).to.eqls(1);
                    expect(body[0].subject).to.contains('is requesting access to your data');
                });

            cy.get('@account')
                .then(l => {
                    participant_dashboard_page.share_email_input()
                        .should("be.visible")
                        .clear()
                        .type(l.address.toString());
                })

            participant_dashboard_page.share_request_type_select()
                .should("be.visible")
                .select('share');

            participant_dashboard_page.share_send_request_button()
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page.shared_accounts_list()
                .should("be.visible")
                .and("have.length", 2);

            cy.wait(15000);
            cy.get('@token')
                .then(l => {
                    temp.getMessagesByToken(l.token.toString())
                })

            cy.get('@messages')
                .then((body) => {
                    cy.log(body)
                    expect(body.length).to.eqls(2);
                    expect(body[0].subject).to.contains('wants to share data with you');
                });

            participant_dashboard_page
                .share_cancel_request_button()
                .should("be.visible")
                .click({
                    force: true,
                    multiple: true
                });

            participant_dashboard_page.shared_accounts_list()
                .should("not.exist");
        })
    });

    it('Timeline page: check elements, open timeline', () => {
        // Cypress.env('account', 'd74zl@arxxwalls.com')
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('Timeline')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        cy.scrollTo('bottom')
            .scrollTo('bottom')
            .scrollTo('bottom')

        participant_dashboard_page
            .days_bucket_list()
            .should("be.visible")
            .last()
            .and("contain.text", 'Born');

        participant_dashboard_page
            .days_bucket_list()
            .should("contain.text", '1 years old')
            .and("contain.text", '2 years old')
            .and("contain.text", '3 years old')
            .and("contain.text", '4 years old')
            .and("contain.text", '5 years old')
            .and("contain.text", '6 years old');

        participant_dashboard_page
            .days_bucket_list()
            .last()
            .find('.fa-chevron-right')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('Timeline')
            .parent('a')
            .should("be.visible")
            .and("have.class", 'selected');

        participant_dashboard_page.tabs()
            .should("contain.text", 'Me')
            .and("contain.text", 'Share')
            .and("contain.text", 'Timeline')
            .and("contain.text", 'More')
            .contains('Me')
            .parent('a')
            .and("not.have.class", 'selected');

        participant_dashboard_page.participant_name()
            .should("be.visible")
            .and("contain.text", Cypress.env('first_n') + ' ' + Cypress.env('last_n'));

        participant_dashboard_page.participant_email()
            .should("be.visible")
            .and("contain.text", Cypress.env('account'));
    });

    it('More page: check elements', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('More')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .more_links()
            .should("be.visible")
            .and("contain.text", 'User Guide')
            .and("contain.text", 'Contact Support')
            .and("contain.text", 'Update Profile')
            .and("contain.text", 'Privacy Policy')
            .and("contain.text", 'Download / Share Health Record')
            .and("contain.text", 'Cancel Account')
    });

    it('More page: contact support', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('More')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .provide_feedback_menu_button()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page.provide_feedback_instruction()
            .should("be.visible")
            .and("contain.text", 'Please share any suggestions or questions you have about this App and how it functions.   NOTE: please do not use this Feedback for any medical questions about your health -- contact your physician or health care provider regarding any concerns about your health.');

        participant_dashboard_page.provide_feedback_subject_select()
            .should("be.visible")
            .select('Bug Report');

        participant_dashboard_page.provide_feedback_comment_input()
            .should("be.visible")
            .type('Test bug report ' + new TempMail().makeHash_(10));

        participant_dashboard_page.provide_feedback_submit_button()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .more_links()
            .should("be.visible")
            .and("contain.text", 'User Guide')
            .and("contain.text", 'Contact Support')
            .and("contain.text", 'Update Profile')
            .and("contain.text", 'Privacy Policy')
            .and("contain.text", 'Download / Share Health Record')
            .and("contain.text", 'Cancel Account')
    });

    it('More page: update profile', () => {
        let temp = new TempMail()
        cy.session('new_email_user' + temp.makeHash_(3), () => {
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
                .loader()
                .should("not.be.visible");

            participant_dashboard_page
                .tabs()
                .contains('More')
                .should("be.visible")
                .click({force: true});

            participant_dashboard_page
                .loader()
                .should("not.be.visible");

            participant_dashboard_page
                .update_profile_menu_button()
                .should("be.visible")
                .click({force: true});

            cy.wait(5000);

            participant_dashboard_page
                .update_email_line()
                .should("be.visible")
                .find('.fa-edit')
                .click({force: true});


            participant_dashboard_page
                .update_profile_email_input()
                .should("be.visible")
                .type(temp.makeHash_(12));

            participant_dashboard_page
                .update_profile_submit_button()
                .should("be.visible")
                .click({force: true})

            temp.createAccount();
            temp.auth(cy.get('@account'))


            cy.get('@account')
                .then(l => {
                    participant_dashboard_page
                        .update_profile_email_input()
                        .should("be.visible")
                        .clear()
                        .type(l.address.toString());
                })

            participant_dashboard_page
                .update_profile_submit_button()
                .should("be.visible")
                .click({force: true});

            cy.wait(10000);

            cy.get('@token')
                .then(l => {
                    temp.getMessagesByToken(l.token.toString())
                        .then(messages => {
                            return temp.message.get_message(messages[0].id, l.token.toString()).as('message')
                                .then((body) => {
                                    cy.log(body)
                                    expect(body.subject).to.contain("Verify your email address");
                                    cy.wrap(temp.detectURLs(body.text))
                                        .as('new_verify_link')
                                });
                        })
                })

            cy.get('@new_verify_link')
                .then(l => {
                    cy.log(l)
                    Cypress.env('new_verify_link', l.toString())
                })

            cy.session('user_verify_'.concat(temp.makeHash_(12)), () => {
                cy._origin(Cypress.env('new_verify_link'), null);
                let participant_login_page = new PO_Login_Participant_Web_page();
                participant_login_page.title()
                    .should("be.visible");
                cy.wait(5000)
            })

            cy.open(env('WEB_BASE_URL_MY_FHR'));
            participant_main_page = new PO_Main_Participant_Web_page();
            participant_main_page.login_button()
                .should("be.visible")
                .click({force: true});


            participant_login_page = new PO_Login_Participant_Web_page();
            cy.get('@account')
                .then(l => {
                    participant_login_page.email_input()
                        .should("be.visible")
                        .type(l.address.toString());
                    Cypress.env('account', l.address.toString());
                })


            participant_login_page.start_login_button()
                .should("be.visible")
                .click({force: true});

            participant_login_page.password_input()
                .should("be.visible")
                .type('@Agent007')

            participant_login_page.login_button()
                .should("be.visible")
                .click({force: true});


            participant_dashboard_page = new PO_Dashboard_Participant_Web_page();
            participant_dashboard_page
                .loader()
                .should("not.be.visible");

            participant_dashboard_page.tabs()
                .should("contain.text", 'Me')
                .and("contain.text", 'Share')
                .and("contain.text", 'Timeline')
                .and("contain.text", 'More')
                .contains('Me')
                .parent('a')
                .and("have.class", 'selected');
        });
    });

    it('More page: Download / Share Health Record ', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('More')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .download_health_record()
            .should("be.visible")
            .click({force: true});

        cy.task("isExistDownloadFile", "portablehealthrecord.pdf", 5000)
            .should("equal", true);

        cy.readPdf('./cypress/downloads/portablehealthrecord.pdf').then(
            text => {
                console.log(text);
                cy.log(text.toString());
                expect(text.toString()).to.includes('myFHR  Health Record');
                expect(text.toString()).to.includes('Generated: ' + Cypress.moment().format('M/D/YYYY'));
                expect(text.toString()).to.includes('Lab Results');
                expect(text.toString()).to.includes('Medication History');
                expect(text.toString()).to.includes('Allergies');
                expect(text.toString()).to.includes('Conditions');
            });
    });

    it('Logout participant', () => {
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
            .loader()
            .should("not.be.visible");

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
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible");

        participant_login_page.login_button()
            .should("be.visible");
    });

    it('More page: Cancel account', () => {
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
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .tabs()
            .contains('More')
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .loader()
            .should("not.be.visible");

        participant_dashboard_page
            .cancel_account()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .cancel_account_link()
            .should("be.visible");

        participant_dashboard_page
            .cancel_account_link()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .cancel_account()
            .should("be.visible")
            .click({force: true});

        participant_dashboard_page
            .cancel_account_confirm_link()
            .should("be.visible")
            .click({force: true});

        participant_login_page.password_input()
            .should("be.visible")
            .type('@Agent007');

        participant_login_page.login_button()
            .should("be.visible")
            .click({force: true});

        participant_login_page.error_message()
            .should("be.visible")
            .and("include.text", 'Invalid password. Please try again or select "Forgot password".');
    });
})