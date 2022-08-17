/**
 * - Check elements of the main page
 * - Check 'failed' Beacon queries in Beacon Admin - check the failed reason, and if necessary, ask the query editor if this is expected
 * - Spot check a few Scoped queries that display a gear (query trigger) and click on the timer/clock to ensure that all entries here are very fast (sub seconds)
 */
import PO_AdminRKS_Beacon_Queries from "../../../pages/RKSAdmin/PO_AdminRKS_Beacon_Queries";

describe('Testing Beacon Admin page', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Check elements of the main page', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();
        beacon.queries_scopes_list()
            .should("be.visible");

        beacon.header
            .navigation_buttons()
            .should("be.visible");

        beacon.header
            .navigation_button('Recent Patients')
            .should("be.visible");

        beacon.header
            .navigation_button('My Patient Lists')
            .should("be.visible");

        beacon.header
            .navigation_button('Beacon Surveillance')
            .should("be.visible");

        beacon.header
            .navigation_button('Administration')
            .should("be.visible");

        beacon.header
            .navigation_button('Provide Feedback')
            .should("be.visible");

        beacon.header
            .navigation_tabs()
            .should("be.visible");

        beacon.header
            .navigation_tab('Edit Query')
            .should("be.visible");

        beacon.header
            .navigation_tab('Organize Views')
            .should("be.visible");

        beacon.header
            .navigation_tab('XML Query Editor')
            .should("be.visible");

        beacon.header
            .navigation_tab('Fusion Inline Edit')
            .should("be.visible");

        beacon.header
            .navigation_tab('XForm Admin')
            .should("be.visible");

        beacon.header
            .navigation_tab('Form Builder')
            .should("be.visible");

        beacon.header
            .navigation_tab('XForm Content Management')
            .should("be.visible");

        beacon.header
            .navigation_tab('XForm Caregiver Admin')
            .should("be.visible");

        beacon.header
            .navigation_tab('Tester')
            .should("be.visible");

        beacon.header
            .global_search_input()
            .should("be.visible");

        beacon.query_list_type_radio()
            .should("be.visible");

        beacon.template_list_type_radio()
            .should("be.visible");

        beacon.pause_services_button()
            .should("be.visible");

        beacon.new_query_button()
            .should("be.visible");

        beacon.new_beacon_template_button()
            .should("be.visible");

        beacon.search_input()
            .should("be.visible");

        beacon.all_queries_link()
            .should("not.exist");

        beacon.executing_queries_link()
            .should("be.visible");

        beacon.failed_queries_link()
            .should("be.visible");

        beacon.execution_action_queries_link()
            .should("not.exist");

        beacon.permissions_action_queries_link()
            .should("be.visible");

        beacon.templates_action_queries_link()
            .should("be.visible");

        beacon.subscriptions_action_queries_link()
            .should("be.visible");

        beacon.nodes_action_queries_link()
            .should("be.visible");

        beacon.expand_all_link()
            .should("be.visible")
            .click({force: true});

        beacon.collapse_all_link()
            .should("be.visible");

        beacon.queries_list()
            .should("be.visible");

        beacon.queries_status_list()
            .should("be.visible");
    });

    it('Check \'failed\' Beacon queries in Beacon Admin - check the failed reason, and if necessary, ask the query editor if this is expected', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();

        beacon.queries_scopes_list()
            .should("be.visible");

        beacon.failed_queries_link()
            .should("be.visible")
            .click({force: true});

        beacon.expand_all_link()
            .should("be.visible")
            .click({force: true});

        beacon.all_queries_link()
            .should("be.visible");

        beacon.executing_queries_link()
            .should("be.visible");

        beacon.failed_queries_link()
            .should("not.exist");

        beacon.queries_list()
            .should("be.visible")
            .find('status-info-control')
            .should("contain.text", 'Error');
    });

    it('Spot check a few Scoped queries that display a gear (query trigger) and click on the timer/clock to ensure that all entries here are very fast (sub seconds)', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();
        beacon.search_input()
            .should("be.visible")
            .type('test' + '{enter}');

        beacon.queries_scopes_list()
            .should("be.visible");

        beacon.loader()
            .should("not.exist");

        beacon.queries_list()
            .should("be.visible")
            .find('.fa-cogs')
            .parents('tr')
            .and("be.visible")
            .find('.fa-clock-o')
            .parents('button.btn-link')
            .and("be.visible")
            .eq(0)
            .click({force: true});

        beacon.queries_timings_popup()
            .should("be.visible")
            .contains('00:00:00.');

        beacon.search_input()
            .should("be.visible")
            .click({force: true});

        beacon.queries_list()
            .should("be.visible")
            .find('.fa-cogs')
            .parents('tr')
            .and("be.visible")
            .find('.fa-clock-o')
            .parents('button.btn-link')
            .and("be.visible")
            .eq(1)
            .click({force: true});

        beacon.queries_timings_popup()
            .should("be.visible")
            .contains('00:00:00.');

        beacon.search_input()
            .should("be.visible")
            .click({force: true});
    });

});