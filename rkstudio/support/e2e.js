// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events/support"
import '@shelex/cypress-allure-plugin';
import {env} from "./utils";

const dayjs = require('dayjs')

Cypress.moment = dayjs
// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
    cy.log("From e22e")
    cy.setCookie(env('ADMIN_SESSION_NAME'),
        env('ADMIN_SESSION_VALUE'));
})

before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('PERMISSION_DENIED')) {
            return false
        } else if (err.message.includes('hashedUsername is not defined')) {
            return false
        }
    })
})