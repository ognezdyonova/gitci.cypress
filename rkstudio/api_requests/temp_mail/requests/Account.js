class Account {
    post_account(email, password) {
        return cy.request({
            method: 'POST',
            url: 'https://api.mail.tm/accounts',
            headers: {
                'Accept': 'application/json',
            },
            body: {
                "address": email,
                "password": password
            }
        }).then(response => {
            expect(response.status).to.eq(201)
            return response
        }).its('body')
    }

    get_account(id, token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/accounts/'.concat(id),
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    get_me(token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/me',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    delete_account(id, token) {
        return cy.request({
            method: 'DELETE',
            url: 'https://api.mail.tm/accounts/'.concat(id),
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(204)
            return response
        }).its('body')
    }
}

export default Account;