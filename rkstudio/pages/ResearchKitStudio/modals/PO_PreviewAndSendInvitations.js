class PO_PreviewAndSendInvitations {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    invitation_list() {
        return cy.get('[ng-repeat="invitation in vm.previewInvitations"]');
    }

    invite_to_enroll_checkbox(){
        return cy.get('[ng-model="vm.inviteToEnroll"]');
    }

    send_email_checkbox(){
        return cy.get('[ng-model="vm.sendEmail"]');
    }

    allow_update_checkbox(){
        return cy.get('[ng-model="vm.allowUpdate"]');
    }

    send_invitation_button(){
        return cy.get('[ng-click="vm.finishSendInvitations()"]');
    }
}

export default PO_PreviewAndSendInvitations;