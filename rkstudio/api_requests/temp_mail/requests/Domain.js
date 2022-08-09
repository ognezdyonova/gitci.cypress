class Domain {
    get_domains(token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/domains',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    get_domain(id, token) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/domains/'.concat(id),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }
}

export default Domain;