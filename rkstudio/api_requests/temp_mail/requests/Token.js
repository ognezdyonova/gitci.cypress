class Token {
    auth(email, password) {
        return cy.request({
            method: 'POST',
            url: 'https://api.mail.tm/token',
            headers: {
                'Accept': 'application/json',
            },
            body: {
                "address": email,
                "password": password
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }
}

export default Token;