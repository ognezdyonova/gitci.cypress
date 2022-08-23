import Domain from "./requests/Domain";
import Message from "./requests/Message";
import Source from "./requests/Source";
import Token from "./requests/Token";
import Account from "./requests/Account";

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
        if (Cypress.env('token_temp')) {
            return this.message
                .get_messages(Cypress.env('token_temp'))
                .as('messages');
        } else {
            return cy.get('@token').then(t => {
                return this.message
                    .get_messages(t.token)
                    .as('messages');
            }).then(d => {
                cy.log();
            })
        }
    }

    getMessagesByToken(token) {
        return this.message
            .get_messages(token)
            .as('messages');
    }

    getMessage(id) {
        if (Cypress.env('token_temp')) {
            return cy.get('@messages')
                .then(messages => {
                    if (id) return this.message.get_message(messages[id].id, Cypress.env('token_temp')).as('message');
                    else return this.message.get_message(messages[0].id, Cypress.env('token_temp')).as('message');
                })
        } else {
            return cy.get('@token').then(t => {
                return cy.get('@messages')
                    .then(messages => {
                        if (id) return this.message.get_message(messages[id].id, t.token).as('message');
                        else return this.message.get_message(messages[0].id, t.token).as('message');
                    })
            }).then(d => {
                cy.log();
            })
        }
    }

    detectURLs(message) {
        let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        return message.match(urlRegex)
    }
}

export default TempMail;