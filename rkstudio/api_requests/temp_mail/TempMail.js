import Mailjs from "@cemalgnlts/mailjs";

class TempMail {
    constructor() {
        this.mail = new Mailjs();
    }

    newEmail() {
        return this.mail.createOneAccount()
            .then(r => {
                return r.data
            })
    }

    login(email, password) {
        return this.mail.login(email, password)
            .then(r => {
                return r.data
            })
    }

    getMessages() {
        return this.mail.getMessages(1)
            .then(r => {
                return r.data
            })
    }

    getMessage(id) {
        return this.mail.getMessage(id)
            .then(r => {
                return r.data
            })
    }

    deleteAccount(){
        return this.mail
            .deleteMe()
    }
}

export default TempMail;

/**
 *         let t = new TempMail();
 *         let a = t.newEmail().then(u => {
 *             cy.log(u)
 *             t.login(u.username, u.password)
 *                 .then(console.log)
 *             return t.getMessages();
 *         })
 *
 *         a.then(console.log)
 */