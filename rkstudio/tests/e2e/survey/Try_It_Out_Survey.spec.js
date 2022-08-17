/**
 * - Using "Surveys" screen, "Try it Out" the new survey
 */


import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";

describe("Using 'Surveys' screen, 'Try it Out' the new survey", () => {
    let survey_name = 'test survey '.concat(new Date().getTime().toString());
    let project_name = 'test project for export'.concat(new Date().getTime().toString());

    beforeEach(() => {
        cy.login();
    })

    afterEach('Remove survey', () => {
        cy.remove_survey(survey_name);
    });

    it("Using 'Surveys' screen, 'Try it Out' the new survey - Add Consent form", () => {
        cy.add_survey(survey_name);
        let survey_page = new PO_Survey();

        survey_page.try_it_out_button()
            .should("be.visible")
            .and("be.disabled");

        survey_page.add_consent()
            .should("be.visible")
            .click({force: true});

        survey_page.try_it_out_button()
            .should("be.visible")
            .and("be.enabled");

        survey_page.slides()
            .should("be.visible")
            .and("have.length", 2)
            .eq(0)
            .and("have.class", 'selected');

        survey_page.next_slide_button()
            .should("be.visible")
            .click({force: true});

        survey_page.slides()
            .should("be.visible")
            .and("have.length", 2)
            .eq(1)
            .and("have.class", 'selected');

        survey_page.try_it_out_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .step_label()
            .should("be.visible")
            .and("contain.text", 'Step 1 of 2');

        survey_page.survey_content_preview
            .text_instructions()
            .should("be.visible")
            .and("contain.text", 'Welcome');

        survey_page.survey_content_preview
            .continue_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .agree_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .agree_button()
            .should("not.exist")
    });

    it("Using 'Surveys' screen, 'Try it Out' the new survey - Add Step", () => {
        cy.add_survey(survey_name);

        let survey_page = new PO_Survey();

        survey_page.try_it_out_button()
            .should("be.visible")
            .and("be.disabled");

        survey_page.add_survey_step()
            .should("be.visible")
            .click({force: true});

        survey_page.try_it_out_button()
            .should("be.visible")
            .and("be.enabled");

        survey_page.slides()
            .should("be.visible")
            .and("have.length", 1)
            .eq(0)
            .and("have.class", 'selected');

        survey_page.default_value_input()
            .should("be.visible")
            .click({force: true})
            .type(new Date().getTime().toString());

        cy.wait(1200);

        survey_page.try_it_out_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .answer_input()
            .should("be.visible");

        survey_page.survey_content_preview
            .done_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_content_preview
            .done_button()
            .should("not.exist")
    });
});
