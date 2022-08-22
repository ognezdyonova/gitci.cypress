class PO_Welcome_Participant_Web_page {

    agree_button() {
        return cy.getElementFromFrame('iframe', '#next');
    }

    cancel_button() {
        return cy.get('.cancel-button')
    }

    first_name_input() {
        return cy.get('.text-answer')
            .should("be.visible")
            .contains('First Name')
            .parent('div')
            .find('[type="text"]')
    }

    last_name_input() {
        return cy.get('.text-answer')
            .should("be.visible")
            .contains('Last Name')
            .parent('div')
            .find('[type="text"]')
    }

    date_input() {
        return cy.get('.text-answer')
            .should("be.visible")
            .contains('Date of Birth')
            .parent('div')
            .find('.datetime-picker-element')
    }

    gender_select() {
        return cy.get('.text-answer')
            .should("be.visible")
            .contains('Gender')
            .parent('div')
            .find('select')
    }

    continue_button() {
        return cy.get('.footer > .continue-button');
    }
}

export default PO_Welcome_Participant_Web_page;