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
import * as auth from "../../../constants/AuthData";
import PO_AdminRKS_User_Security from "../../../pages/RKSAdmin/PO_AdminRKS_User_Security";

describe('Register new account', () => {

    beforeEach(() => {
        cy.open(env("WEB_BASE_URL"));
    })

    it.skip("Create a new RKS Coordinator account: check elements of interface", () => {
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

    it.skip("Create a new RKS Coordinator account: back to login form", () => {
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

    it.skip("Create a new RKS Coordinator account: check validation", () => {
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

    it("Create a new RKS Coordinator account: add new account", () => {
        cy.open(env("WEB_BASE_URL"));
        let temp_mail = new TempMail();
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
            .type('test'.concat(temp_mail.makeHash_(5)));


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

        temp_mail.getMessages().should("have.length", 1);
    });

    context('remove account', () => {
        it("Create a new RKS Coordinator account: remove new account", () => {
            cy.session('login', () => {
                cy.visit(env("WEB_BASE_URL"));
                cy.setCookie(env('ADMIN_SESSION_NAME'), env('ADMIN_SESSION_VALUE'));

                const login = new CR_Main();

                login.goToSignIn(auth.user_login, auth.user_pass);

                let user_security = new PO_AdminRKS_User_Security();
                user_security
                    .email_input()
                    .should("be.visible")
                    .then(input => {
                        cy.get('@account')
                            .then(s => {
                                cy.log(s)
                                cy.wrap(input).type(s.address)
                            });
                    });

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
        });
    })
})