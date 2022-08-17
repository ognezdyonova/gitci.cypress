/**
 * - Under the Beacon Admin, select the Tester tab and conduct one of the two tests present (Add patients or Test Loops)
 */

import PO_AdminRKS_Beacon_Queries from "../../../pages/RKSAdmin/PO_AdminRKS_Beacon_Queries";
import PO_AdminRKS_Beacon_Tester from "../../../pages/RKSAdmin/PO_AdminRKS_Beacon_Tester";

describe('Testing the Beacon Admin page', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Beacon Admin Page elements ', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();

        beacon.header
            .navigation_tab('Tester')
            .should("be.visible")
            .click({force: true});

        let beacon_tester = new PO_AdminRKS_Beacon_Tester();

        beacon_tester.header
            .navigation_buttons()
            .should("be.visible");

        beacon_tester.header
            .navigation_button('Recent Patients')
            .should("be.visible");

        beacon_tester.header
            .navigation_button('My Patient Lists')
            .should("be.visible");

        beacon_tester.header
            .navigation_button('Beacon Surveillance')
            .should("be.visible");

        beacon_tester.header
            .navigation_button('Administration')
            .should("be.visible");

        beacon_tester.header
            .navigation_button('Provide Feedback')
            .should("be.visible");

        beacon_tester.header
            .navigation_tabs()
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('Edit Query')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('Organize Views')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('XML Query Editor')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('Fusion Inline Edit')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('XForm Admin')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('Form Builder')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('XForm Content Management')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('XForm Caregiver Admin')
            .should("be.visible");

        beacon_tester.header
            .navigation_tab('Tester')
            .should("be.visible");

        beacon_tester.header
            .global_search_input()
            .should("be.visible");

        beacon_tester.title()
            .should("be.visible")
            .and("contain.text", 'Beacon Tester');

        beacon_tester.add_patient_title()
            .should("be.visible")
            .and("contain.text", 'Add Patients');

        beacon_tester.add_patient_description()
            .should("be.visible")
            .and("contain.text", 'Create test patients for a chosen Beacon query. We create patients with sufficient data to appear in the query results.');

        beacon_tester.add_patient_select_query_button()
            .should("be.visible");

        beacon_tester.add_patient_number_of_patients_input()
            .should("be.visible");

        beacon_tester.add_patient_select_patient_policy_button()
            .should("be.visible");

        beacon_tester.add_patient_select_encounter_policy_button()
            .should("be.visible");

        beacon_tester.test_loops_title()
            .should("be.visible")
            .and("contain.text", 'Test Loops');

        beacon_tester.test_loops_description()
            .should("be.visible")
            .and("contain.text", 'Create loops that randomly select a patient from a Beacon query\'s results, modify the patient\'s data, and optionally force run the query.');

        beacon_tester.test_loops_select_query_button()
            .should("be.visible");

        beacon_tester.test_loops_time_period_input()
            .should("be.visible");

        beacon_tester.test_loops_mode_select()
            .should("be.visible");

        beacon_tester.test_loops_create_button()
            .should("be.visible");
    });

    it('Add patients', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();

        beacon.header
            .navigation_tab('Tester')
            .should("be.visible")
            .click({force: true});

        let beacon_tester = new PO_AdminRKS_Beacon_Tester();
        beacon_tester.add_patient_select_query_button()
            .should("be.visible")
            .click();

        beacon_tester.add_patient_select_query_search_input()
            .should("be.visible")
            .type('Tate Demo QA');

        beacon_tester.add_patient_select_query_options()
            .should("be.visible")
            .contains('Tate Demo QA')
            .parents('a')
            .click({force: true});

        beacon_tester.add_patient_number_of_patients_input()
            .should("be.visible")
            .clear()
            .type('1');

        beacon_tester.add_patient_select_patient_policy_button()
            .should("be.visible")
            .click();

        beacon_tester.add_patient_select_patient_policy_options()
            .should("be.visible")
            .contains('Standard Record Policy')
            .parents('a')
            .click({force: true});

        beacon_tester.add_patient_select_encounter_policy_button()
            .should("be.visible")
            .click();

        beacon_tester.add_patient_select_encounter_policy_options()
            .should("be.visible")
            .contains('Standard Record Policy')
            .parents('a')
            .click({force: true});

        beacon_tester.create_patient_button()
            .should("be.visible")
            .click({force: true});

        beacon_tester.add_patient_alert_success()
            .should("be.visible")
            .and("contain.text", '1 patient(s) created');
    });

    it('Test Loops', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();

        beacon.header
            .navigation_tab('Tester')
            .should("be.visible")
            .click({force: true});

        let beacon_tester = new PO_AdminRKS_Beacon_Tester();

        beacon_tester.test_loops_select_query_button()
            .should("be.visible")
            .click();

        beacon_tester.test_loops_select_query_search_input()
            .should("be.visible")
            .type('Tate Demo QA');

        beacon_tester.test_loops_select_query_options()
            .should("be.visible")
            .contains('Tate Demo QA')
            .parents('a')
            .click({force: true});

        beacon_tester.test_loops_time_period_input()
            .should("be.visible")
            .clear()
            .type('100');

        beacon_tester.test_loops_mode_select()
            .should("be.visible")
            .select('Modify + Awaited Force Run');

        beacon_tester.test_loops_create_button()
            .should("be.visible")
            .and("be.enabled")
            .click({force: true});

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .and("have.length", 1)
            .and("contain.text", 'Tate Demo QA - Tate Demo QA')
            .and("contain.text", "100 ms")
            .and("contain.text", "ModifyAwait")
            .and("contain.text", "paused");

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Pulse')
            .should("not.have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Delete')
            .should("not.have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("exist")
            .contains('Pause')
            .should("have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Start')
            .should("not.have.class", 'ng-hide')
            .click({force: true});

        beacon_tester.test_loops_table_items()
            .should("exist")
            .contains('Pulse')
            .should("have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("exist")
            .contains('Delete')
            .should("not.have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("exist")
            .contains('Start')
            .should("have.class", 'ng-hide')

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Pause')
            .should("not.have.class", 'ng-hide')
            .click({force: true});

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Pulse')
            .should("not.have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("exist")
            .contains('Pause')
            .should("have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Start')
            .should("not.have.class", 'ng-hide');

        beacon_tester.test_loops_table_items()
            .should("be.visible")
            .contains('Delete')
            .should("not.have.class", 'ng-hide')
            .click({force: true});

        beacon_tester.test_loops_table_items()
            .should("not.exist");
    });
});