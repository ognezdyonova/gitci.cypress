class Message {
    get_messages(token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/messages',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    get_message(id, token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/messages/'.concat(id),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    delete_message(id, token) {
        return cy.request({
            method: 'DELETE',
            url: 'https://api.mail.tm/messages/'.concat(id),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(204)
            return response
        }).its('body')
    }

    message_is_seen(state, token) {
        return cy.request({
            method: 'PATCH',
            url: 'https://api.mail.tm/messages/'.concat(id),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            },
            body: {
                "seen": state
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }
}

export default Message;