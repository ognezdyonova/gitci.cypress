import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_Project {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    surveys_list() {
        return cy.get('#current-panel tbody [ng-click="vm.navigateToSurveyDetails(survey.CareTaskRuleID)"]');
    }
}

export default PO_AdminRKS_Project;