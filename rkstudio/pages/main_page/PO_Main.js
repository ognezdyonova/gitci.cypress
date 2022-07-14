class PO_Main {
    username_input() {
        return cy.get('#Username');
    }

    password_input() {
        return cy.get('#Password');
    }

    submit_button() {
        return cy.get('#login-button');
    }

    forgot_password_link() {
        return cy.get('.login-controls-link')
    }
}

export default PO_Main;