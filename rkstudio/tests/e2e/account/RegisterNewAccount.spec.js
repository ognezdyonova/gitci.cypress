/**
 * Cases:
 * - Create a new RKS Coordinator account
 * - Verify that new account displays in Slack #new-rkstudio-users, receive UG in email
 */

import CR_Main from "../../../pages/ResearchKitStudio/PO_Main";
import {env} from "../../../support/utils";
import PO_Register_New_Account from "../../../pages/RegisterNewAccount/PO_Register_New_Account";
import TempMail from "../../../api_requests/temp_mail/TempMail";

describe('Register new account', () => {
    beforeEach(() => {
        cy.open(env("WEB_BASE_URL"));
    })

    it.skip("Create a new RKS Coordinator account: check elements of interface", () => {
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

    it.skip("Create a new RKS Coordinator account: add new account", () => {
        let login = new CR_Main();
        login.new_user_link()
            .should("be.visible")
            .click();

        let register = new PO_Register_New_Account();
        register.firstname_input()
            .should("be.visible")
            .then($s => $s.type('test'));

        register.lastname_input()
            .should("be.visible")
            .type('test');

        register.username_input()
            .should("be.visible")
            .type('test');

        let temp_mail = new TempMail();
        let user = temp_mail.newEmail();

        register.email_input()
            .should("be.visible")
            .then(($s) => {
                user.then(user_data => {
                    $s.type
                        .type(user_data.username);
                })
            })
        // user.then(user_data=>{
        //     register.email_input()
        //         .should("be.visible")
        //         .type(user_data.username);
        // })

        register.register_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        register.validation_messages()
            .should("not.be.visible");

        cy.wait(5000);

        let messages = user.then(u => {
            console.log(u)
            temp_mail.login(u.username, u.password)
                .then(console.log)
            return temp_mail.getMessages();
        })

        let message = messages.then(list => {
            return temp_mail.getMessage(list[0].id)
        })

        message.then(m => {
            console.log(m)
        })

    });
})