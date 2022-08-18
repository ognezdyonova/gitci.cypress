/**
 * Cases:
 * - Create a new RKS Coordinator account
 * 1)Create a new RKS Coordinator account: check elements of interface
 * 2)Create a new RKS Coordinator account: back to login form
 * 3)Create a new RKS Coordinator account: check validation
 * 4)Create a new RKS Coordinator account: add new account
 * 5)Create a new RKS Coordinator account: remove new account
 * - Verify that new account displays in Slack #new-rkstudio-users, receive UG in email
 */

import CR_Main from "../../../pages/ResearchKitStudio/PO_Main";
import {env} from "../../../support/utils";
import PO_Register_New_Account from "../../../pages/RegisterNewAccount/PO_Register_New_Account";
import TempMail from "../../../api_requests/temp_mail/TempMail";
import PO_AdminRKS_User_Security from "../../../pages/RKSAdmin/PO_AdminRKS_User_Security";
import PO_Activate_New_Account from "../../../pages/RegisterNewAccount/PO_Activate_New_Account";
import PO_Security_Questions_New_Account from "../../../pages/RegisterNewAccount/PO_Security_Questions_New_Account";

describe('Register new account', () => {
    let temp_mail = new TempMail();
    let username = 'test'.concat(temp_mail.makeHash_(5));
    let password = 'Pass'.concat(temp_mail.makeHash_(12));


    it("Create a new RKS Coordinator account: check elements of interface", () => {
        cy.open(env("WEB_BASE_URL"));
        let login = new CR_Main();
        login.username_input()
            .should("be.visible");

        login.password_input()
            .should("be.visible");

        login.submit_button()
            .should("be.visible");

        login.forgot_password_link()
            .should("be.visible");

        login.new_user_link()
            .should("be.visible")
            .click();

        let register = new PO_Register_New_Account();

        register.logo()
            .should("be.visible");

        register.title_form()
            .should("be.visible")
            .and("contain.text", 'Join the MyDataHelps Community');

        register.firstname_input()
            .should("be.visible");

        register.lastname_input()
            .should("be.visible");

        register.username_input()
            .should("be.visible");

        register.email_input()
            .should("be.visible");

        register.register_button()
            .should("be.visible");

        register.back_to_login_button()
            .should("be.visible");
    });

    it("Create a new RKS Coordinator account: back to login form", () => {
        cy.open(env("WEB_BASE_URL"));
        let login = new CR_Main();
        login.new_user_link()
            .should("be.visible")
            .click();

        let register = new PO_Register_New_Account();
        register.back_to_login_button()
            .should("be.visible")
            .click({force: true});

        login.username_input()
            .should("be.visible");

        login.password_input()
            .should("be.visible");

        login.submit_button()
            .should("be.visible");

        login.forgot_password_link()
            .should("be.visible");

        login.new_user_link()
            .should("be.visible")
    });

    it("Create a new RKS Coordinator account: check validation", () => {
        cy.open(env("WEB_BASE_URL"));
        let login = new CR_Main();
        login.new_user_link()
            .should("be.visible")
            .click();

        let register = new PO_Register_New_Account();
        register.firstname_input()
            .should("be.visible")
            .type('test');

        register.lastname_input()
            .should("be.visible")
            .type('test');

        register.username_input()
            .should("be.visible")
            .type('test');

        register.email_input()
            .should("be.visible")
            .type('test');

        register.register_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        register.validation_messages()
            .should("be.visible")
            .and("contain.text", 'Invalid email address.');
    });

    context('Create user', () => {

        it("Create a new RKS Coordinator account: add new account", () => {
            cy.open(env("WEB_BASE_URL"));

            let login = new CR_Main();
            login.new_user_link()
                .should("be.visible")
                .click();

            let register = new PO_Register_New_Account();
            register.firstname_input()
                .should("be.visible")
                .type('test'.concat(temp_mail.makeHash_(5)));

            register.lastname_input()
                .should("be.visible")
                .type('test'.concat(temp_mail.makeHash_(5)));

            register.username_input()
                .should("be.visible")
                .type(username);


            temp_mail.createAccount();

            register.email_input()
                .should("be.visible")
                .then(input => {
                    cy.get('@account')
                        .then(s => {
                            cy.log(s)
                            cy.wrap(input).type(s.address)
                        });
                });

            temp_mail.auth(cy.get('@account'));

            register.register_button()
                .should("be.visible")
                .and("be.enabled")
                .click({force: true});

            register.validation_messages()
                .should("not.be.visible");

            register.back_to_login_button()
                .should("be.visible")
                .click({force: true});
            cy.wait(30000);

            temp_mail.getMessages();
            temp_mail.getMessage();
            cy.get('@message')
                .then((body) => {
                    cy.log(body)
                    expect(body.from.address).to.contain("noreply@careevolution.com");
                    expect(body.html[0]).to.contain("Your username is");
                    expect(body.html[0]).to.contain(username);
                    expect(body.html[0]).to.contain('The link above will expire within 1 week.');
                    const doc = new DOMParser().parseFromString(body.html[0], 'text/html');
                    const hrefs = Array.from(
                        doc.querySelectorAll('[href]'),
                        element => element.getAttribute('href')
                    );
                    cy.wrap(hrefs.find(el => el.includes(env("WEB_BASE_URL"))))
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

        it("Activate account", () => {
            cy._origin(Cypress.env('mydatahelps_link'), null);
            let activate_account = new PO_Activate_New_Account();
            activate_account.logo()
                .should("be.visible");

            activate_account.title()
                .should("be.visible")
                .and("contain.text", 'Activate Account for User '.concat(username));

            activate_account.username_input()
                .parents('.login-form')
                .find('.login-field-editor')
                .and("contain.text", username);

            activate_account.new_password_input()
                .should("be.visible")
                .type(password);

            activate_account.confirm_new_password_input()
                .should("be.visible")
                .type(password);

            activate_account.submit_button()
                .should("be.visible")
                .click({force: true});

            let questions = new PO_Security_Questions_New_Account();
            questions.logo()
                .should("be.visible");

            questions.title()
                .should("be.visible")
                .and("contain.text", 'Security Questions');

            questions.existing_questions_list()
                .should("not.exist");

            questions.security_question_select()
                .should("be.visible")
                .select(1);

            questions.answer_input()
                .should("be.visible")
                .type('answer ' + temp_mail.makeHash_(12));

            questions.save_answer_button()
                .should("be.visible")
                .click({force: true, multiple: true});

            questions.existing_questions_list()
                .should("be.visible")
                .and("have.length", 1);

            questions.security_question_select()
                .should("be.visible")
                .select(2);

            questions.answer_input()
                .should("be.visible")
                .type('answer ' + temp_mail.makeHash_(12));

            questions.save_answer_button()
                .should("be.visible")
                .click({force: true, multiple: true});

            questions.existing_questions_list()
                .should("be.visible")
                .and("have.length", 2);

            questions.security_question_select()
                .should("be.visible")
                .select(3);

            questions.answer_input()
                .should("be.visible")
                .type('answer ' + temp_mail.makeHash_(12));

            questions.save_answer_button()
                .should("be.visible")
                .click({force: true, multiple: true});

            questions.title()
                .should("be.visible")
                .and("contain.text", 'Two-Step Verification is required for your account');

            questions.qr_code()
                .should("be.visible");

            questions.confirmation_code_input()
                .should("be.visible")
                .type(temp_mail.makeHash_(6));

            questions.confirmation_error()
                .should("not.exist");

            questions.enable_two_step_verification_button()
                .should("be.visible")
                .click({force: true});

            questions.confirmation_error()
                .should("be.visible")
                .and("contain.text", 'Invalid code');
        });

        it("remove account ", () => {
            cy.login(null, null, 'User Security');

            let user_security = new PO_AdminRKS_User_Security();
            user_security
                .email_input()
                .should("be.visible")
                .type(Cypress.env('account'));

            user_security
                .search_button()
                .should("be.visible")
                .click({force: true});

            user_security.delete_button()
                .should("be.visible")
                .click({force: true});

            user_security.approving_delete_button()
                .should("be.visible")
                .click({force: true});

            user_security.delete_button()
                .should("not.exist");
        });

    })
})