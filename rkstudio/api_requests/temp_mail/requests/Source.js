class Source {
    get_source(id, token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/sources/'.concat(id),
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }
}

export default Source;