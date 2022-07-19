import CR_Main from "../pages/PO_Main";
import * as auth from "../constants/AuthData"
import {env} from "./utils";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Authorization
 * @param l user login
 * @param p user password
 */
Cypress.Commands.add('login', (l, p) => {
    cy.session('login', ()=>{
        cy.visit(env("WEB_BASE_URL"));
        cy.setCookie(env('ADMIN_SESSION_NAME'), env('ADMIN_SESSION_VALUE'));

        const login = new CR_Main();

        if (l == null && p == null) login.goToSignIn(auth.user_login, auth.user_pass); else login.goToSignIn(l, p);
    })

    cy.visit(env("WEB_BASE_URL"));
    cy.wait(1000).get("body").then($body => {
        if ($body.find(".dashboard-links").length > 0) {   //evaluates as true
            cy.get('a')
                .should('be.visible')
                .contains('ResearchKit Studio')
                .click({force: true})
        }
    });
});


