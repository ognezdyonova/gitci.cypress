import PO_AdminRKS_Header from "./PO_AdminRKS_Header";

class PO_AdminRKS_User_Security {
    constructor() {
        this.header = new PO_AdminRKS_Header();
    }

    email_input() {
        return cy.get('input[type="email"]');
    }

    search_button() {
        return cy.get('button.search[type="submit"]');
    }

    delete_button() {
        return cy.get('button.delete-user');
    }

    approving_delete_button() {
        return cy.get('.fa-trash').parents('button');
    }
}

export default PO_AdminRKS_User_Security;