/**
 * - Check Deployment Admin, Beacon Services for any extensive errors
 */
import PO_AdminRKS_Beacon_Queries from "../../../pages/RKSAdmin/PO_AdminRKS_Beacon_Queries";
import PO_AdminRKS_Deployment_Administration from "../../../pages/RKSAdmin/PO_AdminRKS_Deployment_Administration";

describe('Testing Beacon Administration page', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Check Deployment Admin, Beacon Services for any extensive errors', () => {
        cy.login(null, null, 'Beacon Admin');

        let beacon = new PO_AdminRKS_Beacon_Queries();
        beacon.queries_scopes_list()
            .should("be.visible");

        beacon.header
            .navigation_button('Administration')
            .should("be.visible")
            .realHover();

        beacon.header
            .dropdown_menu()
            .should("be.visible")
            .contains('Deployment Administration')
            .click({force: true});


        let deployment_page = new PO_AdminRKS_Deployment_Administration();
        deployment_page.search_input()
            .should("be.visible")
            .type('BeaconNodeService03' + '{enter}');

        deployment_page.title()
            .should("be.visible")
            .and("contain.text", 'BeaconNodeService03');

        deployment_page.status()
            .should("be.visible");

        deployment_page.start_service()
            .should("be.visible");

        deployment_page.container()
            .should("be.visible");
    });

});