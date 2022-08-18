class PO_Welcome_Participant_Web_page {
    // title() {
    //
    //     return cy.get('[step-manager="stepManager"] iframe')
    //         .should("exist")
    //         .switchToFrame(() => {
    //             return cy.get('h1');
    //         })
    //
    // }

    agree_button() {
        return cy.getElementFromFrame('iframe', '#next');
    }

    cancel_button() {
        return cy.get('.cancel-button')
    }
}

export default PO_Welcome_Participant_Web_page;