/**
 * Select the My Account/Profile: verify you see the 5 tabs, and also Back and Logout links
 */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Profile from "../../../pages/ResearchKitStudio/PO_Profile";

describe('Select the My Account/Profile: verify you see the 5 tabs, and also Back and Logout links', () => {
    beforeEach(() => {
        cy.login();
    })

    it("Verify the My Account/Profile", () => {
        let home_page = new PO_Home();
        home_page.header.organization_switcher_link()
            .should("be.visible");

        home_page.header.user_link()
            .should("be.visible")
            .realHover();

        home_page.header.user_profile_link()
            .should("be.visible")
            .click({force: true});

        let profile = new PO_Profile();
        profile.logo()
            .should("be.visible");

        profile.title()
            .should("be.visible")
            .and("contain.text", 'My Profile');

        profile.back_link()
            .should("be.visible");

        profile.logout_link()
            .should("be.visible");

        profile.change_password_tab()
            .should("be.visible")
            .click({force: true});

        profile.old_password_input()
            .should("be.visible");

        profile.new_password_input()
            .should("be.visible");

        profile.confirm_password_input()
            .should("be.visible");

        profile.show_password_checkbox()
            .should("be.visible");

        profile.logout_other_sessions_checkbox()
            .should("be.visible");

        profile.submit_button()
            .should("be.visible");

        profile.my_information_tab()
            .should("be.visible")
            .click({force: true});

        profile.first_name_input()
            .should("be.visible");

        profile.middle_name_input()
            .should("be.visible");

        profile.last_name_input()
            .should("be.visible");

        profile.submit_button()
            .should("be.visible");

        profile.security_questions_tab()
            .should("be.visible")
            .click({force: true});

        profile.security_question_explanation()
            .should("be.visible");

        profile.security_question_suggestions_select()
            .should("be.visible");

        profile.security_question_answer_input()
            .should("be.visible");

        profile.submit_button()
            .should("be.visible");

        profile.blinded_mode_tab()
            .should("be.visible")
            .click({force: true});

        profile.blinded_mode_description()
            .should("be.visible")
            .and("contain.text", 'For demonstration purposes, most identifying information can be "blinded".');

        profile.blinded_mode_enable()
            .should("be.visible");

        profile.two_step_verification_tab()
            .should("be.visible")
            .click({force: true});

        profile.disable_twostepverification_button()
            .should("be.visible");

        profile.view_recovery_codes_button()
            .should("be.visible");
    });
})