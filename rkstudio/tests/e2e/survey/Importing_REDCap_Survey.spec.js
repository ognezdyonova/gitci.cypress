/**
 * Steps:
 *"Import survey from RedCap
 *      - First download a RedCap xml file to your computer from https://drive.google.com/drive/u/0/folders/1zDoKsf4z0MFVEj7naQoHEw2i1boWamIL and place on desktop/computer
 *      - Select an Org
 *      - Go to Surveys
 *      - Select "Import from REDCap (CDISC ODN) in the upper right corner
 *      - Nagiate to the xml file on your computer, select the file, select Import and name it
 *      - The survey with display under the Survey section "
 *
 * Cases:
 * - Import survey from RedCap: select survey type
 * - Import 'Empty' from RedCap as REDCapJustForFun_CDISC_ODM_2019-04-09_0916.xml
 * - Import 'Test survey for importing' from RedCap as Test_2018-12-17_0943.REDCap.xml
 * */

import PO_Home from "../../../pages/ResearchKitStudio/PO_Home";
import PO_Surveys from "../../../pages/ResearchKitStudio/PO_Surveys";
import PO_Survey from "../../../pages/ResearchKitStudio/PO_Survey";

describe("Import survey from RedCap", () => {

    beforeEach(() => {
        cy.login();
    })

    it("Import survey from RedCap: select survey type", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.survey_items()
            .should("be.visible");
        surveys.surveys_file_import()
            .attachFile('upload_files/Test_2018-12-17_0943.REDCap.xml')

        surveys.select_instrumentsT_to_import_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Select Instruments to Import');

        surveys.select_instrumentsT_to_import_modal
            .instruments_list()
            .should("be.visible");

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import');

        surveys.select_instrumentsT_to_import_modal
            .instrument_check('Adolescent Outcomes Questionnaire Parent Reported')
            .check({force: true});

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import 1 Instrument');

        surveys.select_instrumentsT_to_import_modal
            .instrument_check('Patient Health Questionnaire 9')
            .check({force: true});

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import 2 Instruments');

        surveys.select_instrumentsT_to_import_modal
            .instrument_check('Test survey for importing')
            .check({force: true});

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import 3 Instruments');
    });

    it("Import 'Empty' from RedCap as REDCapJustForFun_CDISC_ODM_2019-04-09_0916.xml", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.survey_items()
            .should("be.visible");
        surveys.surveys_file_import()
            .attachFile('upload_files/REDCapJustForFun_CDISC_ODM_2019-04-09_0916.xml')

        surveys.select_instrumentsT_to_import_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Select Instruments to Import');

        surveys.select_instrumentsT_to_import_modal
            .instruments_list()
            .should("not.exist");

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import')
            .click({force: true});

        surveys.select_instrumentsT_to_import_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Import Results');

        surveys.select_instrumentsT_to_import_modal
            .message()
            .should("be.visible")
            .and("contain.text", '0 survey(s) have been successfully imported.');

        surveys.select_instrumentsT_to_import_modal
            .done_button()
            .should("be.visible")
            .click({force: true});
    });

    it("Import 'Test survey for importing' from RedCap as Test_2018-12-17_0943.REDCap.xml", () => {
        let home = new PO_Home();
        home.header.surveys_link()
            .should("be.visible")
            .click({force: true});

        let surveys = new PO_Surveys();

        surveys.survey_items()
            .should("be.visible");
        surveys.surveys_file_import()
            .attachFile('upload_files/Test_2018-12-17_0943.REDCap.xml')

        surveys.select_instrumentsT_to_import_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Select Instruments to Import');

        surveys.select_instrumentsT_to_import_modal
            .instrument_check('Test survey for importing')
            .check({force: true});

        surveys.select_instrumentsT_to_import_modal
            .import_button()
            .should("be.visible")
            .and("contain.text", 'Import 1 Instrument')
            .click({force: true});

        surveys.select_instrumentsT_to_import_modal
            .title()
            .should("be.visible")
            .and("contain.text", 'Import Results');

        surveys.select_instrumentsT_to_import_modal
            .message()
            .should("be.visible")
            .and("contain.text", '1 survey(s) have been successfully imported.');


        surveys.select_instrumentsT_to_import_modal
            .done_button()
            .should("be.visible")
            .click({force: true});

        cy.reload()

        cy.open_survey('Test survey for importing');

        let survey = new PO_Survey();
        survey.steps_list()
            .should("be.visible")
            .and("have.length", 44)

        cy.remove_survey('Test survey for importing');
    });
});
