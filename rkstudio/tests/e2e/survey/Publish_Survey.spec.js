/*
- Publish the new survey (test that you are able to select other versions on mature surveys)
- You are able to select other versions on mature surveys
* */

import PO_Home from "../../../pages/PO_Home";
import PO_Surveys from "../../../pages/PO_Surveys";
import PO_Survey from "../../../pages/PO_Survey";

describe("Publish the new survey (test that you are able to select other versions on mature surveys)", () => {
    let survey_name = 'test survey '.concat(new Date().getTime().toString());

    it("Publish survey", () => {
        let home = new PO_Home();

        home.new_survey_input_name()
            .should("be.visible")
            .type(survey_name);

        home.new_survey_add_button()
            .should("be.visible")
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible")
            .and("contain.text", survey_name);

        survey_page.survey_type_select()
            .should("be.visible")
            .select('Fitness Check');

        survey_page.save_and_publish_new_version_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        survey_page.save_and_publish_modal
            .publish_versions_header()
            .should("be.visible")
            .and("contain.text", 'Publish Version 0');

        survey_page.save_and_publish_modal
            .description_label()
            .should("be.visible")
            .and("contain.text", 'Where would you like to publish this survey version?');

        survey_page.save_and_publish_modal
            .projects_list()
            .should("be.visible");

        survey_page.save_and_publish_modal
            .confirm_button()
            .should("be.visible")
            .click({force: true})
            .and("not.be.visible");

        cy.wait(3000)

        survey_page.version_button()
            .click({force: true});

        survey_page.version_items_from_list()
            .should("be.visible")
            .and("have.length", 1)
            .and("have.class", 'selected')
            .and("contain.text", 'Olga Gnezdyonova');
    });

    it("Make new survey version and check it", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible");

        survey_page.revert_changes_button()
            .should("not.be.visible");

        survey_page.survey_type_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Fitness Check');

        survey_page.survey_type_select()
            .select('Reaction Time');

        survey_page.save_and_publish_new_version_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        survey_page.save_and_publish_modal
            .publish_versions_header()
            .should("be.visible")
            .and("contain.text", 'Publish Version 1');

        survey_page.save_and_publish_modal
            .description_label()
            .should("be.visible")
            .and("contain.text", 'Where would you like to publish this survey version?');

        survey_page.save_and_publish_modal
            .projects_list()
            .should("be.visible")
            .eq(0)
            .find('.diff-checkbox i')
            .click({force: true});

        survey_page.save_and_publish_modal
            .confirm_button()
            .should("be.visible")
            .click({force: true})
            .and("not.be.visible");

        survey_page.version_button()
            .click({force: true});

        survey_page.version_items_from_list()
            .should("be.visible")
            .and("have.length", 2)
            .eq(0)
            .and("have.class", 'selected')
            .and("contain.text", 'Olga Gnezdyonova');
    });

    it("Revert to the previous version", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible");

        survey_page.revert_changes_button()
            .should("not.be.visible");

        survey_page.survey_type_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Reaction Time');

        survey_page.survey_type_select()
            .select('Stroop')
            .find('option:selected')
            .should('have.text', 'Stroop');

        survey_page.revert_changes_button()
            .should("be.visible")
            .click({force: true});

        survey_page.survey_type_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Reaction Time');

        survey_page.version_button()
            .click({force: true});

        survey_page.version_items_from_list()
            .should("be.visible")
            .and("have.length", 2)
            .eq(0)
            .and("have.class", 'selected')
            .and("contain.text", 'Olga Gnezdyonova');
    });

    it("Select previous version", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        let survey_page = new PO_Survey();
        survey_page.breadcrumbs()
            .should("be.visible");

        survey_page.revert_changes_button()
            .should("not.be.visible");

        survey_page.version_button()
            .click({force: true});

        survey_page.version_items_from_list()
            .should("be.visible")
            .and("have.length", 2)
            .eq(0)
            .and("have.class", 'selected')
            .and("contain.text", 'Olga Gnezdyonova');

        survey_page.version_items_from_list()
            .last()
            .click({force: true});

        survey_page.survey_type_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Fitness Check');

        survey_page.header
            .surveys_link()
            .should("be.visible")
            .click({force: true});

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .clear()
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .eq(0)
            .click({force: true});

        survey_page.survey_type_select()
            .should("be.visible")
            .find('option:selected')
            .should('have.text', 'Reaction Time');

    });

    after('Remove survey', () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.filter_survey_select_by_category()
            .should("be.visible");

        surveys.search_survey_input_by_name()
            .should("be.visible")
            .clear()
            .type(survey_name)

        surveys.survey_items()
            .should("be.visible")
            .and("contain.text", survey_name);

        surveys.survey_remove_button()
            .should("be.visible")
            .click({force: true, multiple: true})

        surveys.survey_items()
            .should("not.exist");
    });

});


