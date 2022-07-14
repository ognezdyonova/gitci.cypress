
describe("Login page", () => {
    const currentYear = Cypress.moment().format('YYYY')
    context("Login e2e", () => {
        beforeEach(() => {
            cy.visit(Cypress.env("WEB_BASE_URL"));
        });

        it("Log In Form General Display", () => {
            cy.login()
        });


    });
});


