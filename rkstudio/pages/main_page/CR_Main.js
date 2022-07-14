import PO_Main from './PO_Main';

class CR_Main {

    constructor() {
        this.elements = new PO_Main();
    }

    goToSignIn(username, pass) {
        cy.wait(1000).get('body').then($body=>{
          if($body.find("#login").is(":visible")){
              this.elements.username_input()
                  .should("be.visible")
                  .type(username);
              this.elements.password_input()
                  .should("be.visible")
                  .type(pass)
                  .type('{enter}');
              //this.elements.submit_button().should('be.visible').click({force: true});

              this.elements.username_input().should("not.exist");
              this.elements.password_input().should("not.exist");
          }
        })
    }
}

export default CR_Main;