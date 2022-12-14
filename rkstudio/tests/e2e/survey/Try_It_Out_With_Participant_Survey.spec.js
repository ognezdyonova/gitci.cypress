/**
 * - Using "Surveys" screen, "Try it Out" the new survey
 * - On the "Try it out," there is the capability to search a survey by using the ppt ID for a ppt who participated previously on the survey
 */


import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";
import PO_Project from "../../../pages/ResearchKitStudio/PO_Project";
import PO_Projects from "../../../pages/ResearchKitStudio/PO_Projects";

describe("On the \"Try it out,\" there is the capability to search a survey by using the ppt ID for a ppt who " +
    "participated previously on the survey", () => {
    let project_name = 'test project for export'.concat(new Date().getTime().toString());

    before(() => {
        cy.login();
    })

    after('Remove survey', () => {
        let survey_page = new PO_Survey();
        survey_page.header.projects_link()
            .should("be.visible")
            .click({force:true});

        let projects = new PO_Projects();
        projects.projects_list()
            .should("be.visible")
            .contains(project_name)
            .parents('.items-list-item')
            .click({force: true});

        let project = new PO_Project();
        project.project_setup_items()
            .should("be.visible")
            .contains('About')
            .click({force: true});

        cy.remove_paticipant();
        cy.remove_project(project_name);
    });

    it("Add Consent form", () => {
        cy.add_project(project_name);

        let project = new PO_Project();
        project.project_setup_items()
            .should("be.visible")
            .contains('About')
            .click({force: true});

        cy.add_paticipant();
        cy.open_survey(project_name);

        let survey_page = new PO_Survey();

        survey_page.try_it_out_button()
            .should("be.visible");

        survey_page.slides()
            .should("be.visible")
            .and("have.length", 5)
            .eq(0)
            .and("have.class", 'selected');

        survey_page.next_slide_button()
            .should("be.visible")
            .click({force: true});

        survey_page.slides()
            .should("be.visible")
            .and("have.length", 5)
            .eq(1)
            .and("have.class", 'selected');

        survey_page.try_it_out_for_participant_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        survey_page.preview_participant_id_button()
            .should("be.visible")
            .type("1234593889238" + '{enter}')

        survey_page.survey_content_preview
            .step_label()
            .should("be.visible")
            .and("contain.text", 'Step 1 of 5');

        survey_page.survey_content_preview
            .text_instructions()
            .should("be.visible")
            .and("contain.text", 'Welcome');

        survey_page.survey_content_preview
            .continue_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .is_over18_radio()
            .should("be.visible")
            .check({force: true});

        survey_page.survey_content_preview
            .lives_in_america_radio()
            .should("be.visible")
            .check({force: true});

        survey_page.survey_content_preview
            .next_button()
            .should("be.visible")
            .click({force: true});

        cy.get('body').trigger('keydown', {keyCode: 27});
    });
});


