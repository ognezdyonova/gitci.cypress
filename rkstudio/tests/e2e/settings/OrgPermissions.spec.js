/**
 * Cases:
 * - On the org Settings tab, select Teams
 * Add a Team, selecting minimal permissions (e.g., Survey Author and Survey Publisher)
 * - On the User Access tab, add an email address that is not already an existing RKStudio user (use a variation of your CE email address)
 * A popup displays indicating the email is not associated with an existing RKStudio user, click okay to invite them them to your organization
 */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Settings from "../../../pages/ResearchKitStudio/PO_Settings";
import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";

describe('Org Permissions', () => {
    let project_name = 'test project for team'.concat(new Date().getTime().toString());
    let team_name = 'team '.concat(new Date().getTime().toString());

    beforeEach(() => {
        cy.login();
    })

    after('remove created project', () => {
        cy.remove_project(project_name);
    });

    it('Add a Team, selecting minimal permissions (e.g., Survey Author and Survey Publisher)', () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.header.settings_link()
            .should("be.visible")
            .click({force: true});

        let org_settings = new PO_Settings();
        org_settings.teams_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.teams_items()
            .should("be.visible")
            .and("have.length.above", 1);

        org_settings.new_team_button()
            .should("be.visible")
            .click({force: true});

        org_settings.new_team_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Edit Team');

        org_settings.new_team_modal
            .description()
            .should("be.visible")
            .and("contain.text", 'These permissions will be given to members of this team.');

        org_settings.new_team_modal
            .name_input()
            .should("be.visible")
            .type(team_name);

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Survey Author')
            .children('input')
            .check({force: true});

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Notification Author')
            .children('input')
            .check({force: true});

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Survey Publisher')
            .children('input')
            .check({force: true});

        org_settings.new_team_modal
            .choose_project_select()
            .should("be.visible")
            .select(project_name);

        org_settings.new_team_modal
            .add_project_button()
            .should("be.visible")
            .click({force: true});

        org_settings.new_team_modal
            .save_button()
            .scrollIntoView()
            .should("be.visible")
            .click({force: true});

        org_settings.edit_team(team_name)
            .should("be.visible");

        org_settings.remove_team(team_name)
            .should("be.visible");

        org_settings.teams_items()
            .should("be.visible")
            .and("contain.text", team_name)
            .and("contain.text", 'Survey Author')
            .and("contain.text", 'Survey Publisher')
            .and("contain.text", 'Notification Author');
    });

    it('Edit a Team, selecting minimal permissions (e.g., Survey Author and Survey Publisher)', () => {
        let project = new PO_Project();
        project.header.settings_link()
            .should("be.visible")
            .click({force: true});

        let org_settings = new PO_Settings();
        org_settings.teams_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.teams_items()
            .should("be.visible")
            .and("have.length.above", 1);

        org_settings.remove_team(team_name)
            .should("be.visible");

        org_settings.edit_team(team_name)
            .should("be.visible")
            .click({force: true});

        org_settings.new_team_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Edit Team');

        org_settings.new_team_modal
            .description()
            .should("be.visible")
            .and("contain.text", 'These permissions will be given to members of this team.');

        org_settings.new_team_modal
            .name_input()
            .should("be.visible")
            .clear()
            .type('edited ' + team_name);

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Survey Author')
            .children('input')
            .uncheck({force: true});

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Notification Author')
            .children('input')
            .uncheck({force: true});

        org_settings.new_team_modal
            .permission_checkbox()
            .should("be.visible")
            .contains('Survey Publisher')
            .children('input')
            .check({force: true});

        org_settings.new_team_modal
            .choose_project_select()
            .should("be.visible")
            .select(project_name);

        org_settings.new_team_modal
            .add_project_button()
            .should("be.visible")
            .click({force: true});

        org_settings.new_team_modal
            .save_button()
            .scrollIntoView()
            .should("be.visible")
            .click({force: true});

        org_settings.teams_items()
            .should("be.visible")
            .contains(team_name)
            .parents('tr')
            .and("contain.text", 'edited ' + team_name)
            .and("not.have.text", 'Survey Author')
            .and("contain.text", 'Survey Publisher')
            .and("not.have.text", 'Notification Author');
    });

    it("On the User Access tab, add an email address that is not already an existing RKStudio user (use a variation of your CE email address)", () => {
        let project = new PO_Project();
        project.header.settings_link()
            .should("be.visible")
            .click({force: true});

        let org_settings = new PO_Settings();
        org_settings.user_access_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.user_access_items()
            .should("be.visible");

        org_settings.new_access_username_input()
            .should("be.visible")
            .type('testuser@maildomain.com');

        org_settings.new_access_username_save_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        org_settings.user_invitation_items()
            .should("be.visible")
            .and("have.length.above", 0)
            .and("contain.text", 'testuser@maildomain.com');

        let invite_line = org_settings.user_invitation_items()
            .contains('testuser@maildomain.com')
            .parents('tr');

        invite_line
            .should("contain.text", 'Everyone')
            .and('not.have.text', 'edited ' + team_name);

        invite_line
            .find('select')
            .select('edited ' + team_name);

        org_settings.user_invitation_items()
            .contains('testuser@maildomain.com')
            .parents('tr')
            .should("contain.text", 'Everyone')
            .and('contain.text', 'edited ' + team_name);

        cy.reload();
        org_settings.user_access_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.user_invitation_items()
            .contains('testuser@maildomain.com')
            .parents('tr')
            .should("contain.text", 'Everyone')
            .and('contain.text', 'edited ' + team_name);

        /**
         * click by remove button
         */
        org_settings.user_invitation_items()
            .contains('testuser@maildomain.com')
            .parents('tr')
            .find('button')
            .click({force: true});

        org_settings.user_invitation_items()
            .and("not.have.text", 'testuser@maildomain.com');
    });

    it('Remove a Team', () => {
        let project = new PO_Project();
        project.header.settings_link()
            .should("be.visible")
            .click({force: true});

        let org_settings = new PO_Settings();
        org_settings.teams_tab()
            .should("be.visible")
            .click({force: true});

        org_settings.teams_items()
            .should("be.visible")
            .and("have.length.above", 1);

        org_settings.edit_team(team_name)
            .should("be.visible");

        org_settings.remove_team(team_name)
            .should("be.visible")
            .click({force: true});

        org_settings.teams_items()
            .should("be.visible")
            .and("not.contain.text", 'edited ' + team_name);
    });

})
