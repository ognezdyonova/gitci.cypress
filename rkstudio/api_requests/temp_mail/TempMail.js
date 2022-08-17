import Account from "./requests/Account";
import Domain from "./requests/Domain";
import Message from "./requests/Message";
import Source from "./requests/Source";
import Token from "./requests/Token";

class TempMail {
    constructor() {
        this.account = new Account();
        this.domain = new Domain();
        this.message = new Message();
        this.source = new Source();
        this.token = new Token();
    }

    makeHash_(size) {
        return Array.from({length: size}, () => (function (charset) {
            return charset.charAt(Math.floor(Math.random() * charset.length));
        })("abcdefghijklmnopqrstuvwxyz0123456789")).join("");
    }

    createAccount() {
        return this.domain.get_domains()
            .then(t => {
                let d = t.filter(d => d.isActive === true)[0].domain
                // 2) Generate a username (test@domain.com).
                let username = `${this.makeHash_(5)}@${d}`;
                // 3) Generate a password and register.
                let password = 'agent007';

                this.account.post_account(username, password).as("account");
            }).then(d => {
                cy.log()
            });
    }

    auth(username) {
        return username.then(user => {
            return this.token.auth(user.address, 'agent007').as("token")
        }).then(d => {
            cy.log();
        })
    }

    getMessages() {
        return cy.get('@token').then(t => {
            return this.message
                .get_messages(t.token)
                .as('messages');
        }).then(d => {
            cy.log();
        })
    }

    getMessage() {
        return cy.get('@token').then(t => {
            return cy.get('@messages')
                .then(messages=>{
                    return this.message
                        .get_message(messages[0].id,t.token).as('message');
                })
        }).then(d => {
            cy.log();
        })
    }
}

export default TempMail;