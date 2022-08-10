class Domain {
    get_domains() {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/domains',
            headers: {
                'Accept': 'application/json',
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            return response
        }).its('body')
    }

    get_domain(id) {
        return cy.request({
            method: 'GET',
            url: 'https://api.mail.tm/domains/'.concat(id),
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

export default Domain;