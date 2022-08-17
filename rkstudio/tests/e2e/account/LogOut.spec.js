/**
 * Cases:
 * - Log out
 */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Profile from "../../../pages/ResearchKitStudio/PO_Profile";
import CR_Main from "../../../pages/ResearchKitStudio/PO_Main";

describe('Log out', () => {
    it("Log out", () => {
        let home_page = new PO_Home();
        home_page.header.organization_switcher_link()
            .should("be.visible");

        home_page.header.user_link()
            .should("be.visible")
            .realHover();

        home_page.header.user_sign_out_link()
            .should("be.visible")
            .click({force: true});

        let login = new CR_Main();
        login.username_input()
            .should("be.visible");

        login.password_input()
            .should("be.visible");

        login.submit_button()
            .should("be.visible");

        login.forgot_password_link()
            .should("be.visible");

        cy.reload();

        login.username_input()
            .should("be.visible");

        login.password_input()
            .should("be.visible");

        login.submit_button()
            .should("be.visible");

        login.forgot_password_link()
            .should("be.visible");
    });
})