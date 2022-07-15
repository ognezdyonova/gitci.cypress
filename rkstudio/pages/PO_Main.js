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

    goToSignIn(username, pass) {
        cy.wait(1000).get('body').then($body=>{
            if($body.find("#login").is(":visible")){
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