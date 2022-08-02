class PO_AdminRKS_Header {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    navigation_buttons() {
        return cy.get('#top-navigation .navigation-item');
    }

    /**
     * @param name name of menu button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    navigation_button(name) {
        return cy.get('#top-navigation .navigation-item')
            .should("be.visible")
            .contains(name)
            .parents('.navigation-item');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    navigation_tabs() {
        return cy.get('#navigation-tabs a');
    }

    /**
     * @param name name of tab button
     * @returns {Cypress.Chainable<Subject>}
     */
    navigation_tab(name) {
        return cy.get('#navigation-tabs a')
            .should("be.visible")
            .contains(name);
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    global_search_input() {
        return cy.get('#global-searchtext');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    global_search_results_list() {
        return cy.get('#global-search-application .global-search-results .global-search-result');
    }
}

export default PO_AdminRKS_Header;