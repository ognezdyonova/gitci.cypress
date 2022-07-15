class PO_Main {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    username_input() {
        return cy.get('#Username');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    password_input() {
        return cy.get('#Password');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    submit_button() {
        return cy.get('#login-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    forgot_password_link() {
        return cy.get('.login-controls-link')
    }

    /**
     * User login
     *
     * @param username
     * @param pass
     */
    goToSignIn(username, pass) {
        cy.wait(1000).get('body').then($body => {
            if ($body.find("#login").is(":visible")) {
                this.username_input()
                    .should("be.visible")
                    .type(username);
                this.password_input()
                    .should("be.visible")
                    .type(pass)
                    .type('{enter}');
                //this.submit_button().should('be.visible').click({force: true});

                this.username_input().should("not.exist");
                this.password_input().should("not.exist");
            }
        })
    }
}

export default PO_Main;