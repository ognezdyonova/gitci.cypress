import CR_Main from "../pages/ResearchKitStudio/PO_Main";
import * as auth from "../constants/AuthData"
import {test_participant} from "../constants/AuthData"
import {env} from "./utils";
import PO_Home from "../pages/ResearchKitStudio/PO_Home";
import PO_Projects from "../pages/ResearchKitStudio/PO_Projects";
import PO_Project from "../pages/ResearchKitStudio/PO_Project";
import PO_Surveys from "../pages/ResearchKitStudio/PO_Surveys";
import PO_Project_Participants_list_Tab from "../pages/ResearchKitStudio/PO_Project_Participants_list_Tab";
import PO_Survey from "../pages/ResearchKitStudio/PO_Survey";
import PO_AdminRKS_User_Security from "../pages/RKSAdmin/PO_AdminRKS_User_Security";
import TempMail from "../api_requests/temp_mail/TempMail";

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
Cypress.Commands.add('login', (l, p, main_page) => {
    cy.session('login', () => {
        cy.visit(env("WEB_BASE_URL"));
        cy.setCookie(env('ADMIN_SESSION_NAME'), env('ADMIN_SESSION_VALUE'));

        const login = new CR_Main();

        if (l == null && p == null) login.goToSignIn(auth.user_login, auth.user_pass); else login.goToSignIn(l, p);
    })

    cy.visit(env("WEB_BASE_URL"));

    cy.wait(1000).get("body").then($body => {
        if ($body.find(".dashboard-links").length > 0) {   //evaluates as true
            if (main_page == null) {
                cy.get('a')
                    .should('be.visible')
                    .contains('ResearchKit Studio')
                    .click({force: true})
            } else {
                cy.get('a')
                    .should('be.visible')
                    .contains(main_page)
                    .click({force: true})
            }
        }
    });
});
Cypress.Commands.add('open', (url) => {
    cy.session('open', () => {
        cy.visit(url);
        cy.setCookie(env('ADMIN_SESSION_NAME'), env('ADMIN_SESSION_VALUE'));
    })

    cy.visit(url);
});

Cypress.Commands.add('_origin', (url, additionalDomain) => {
    let path = url;

    cy.window().then(win => {
        return win.open(path, '_self');
    });

    if (additionalDomain !== null) {
        cy.url().then((url) => {
            let domain = (new URL(url));
            path = additionalDomain.concat(domain.pathname).concat(domain.search)


            cy.window().then(win => {
                return win.open(path, '_self');
            });
        })
    }
})

Cypress.Commands.add('openWindow', (url, features) => {
    const w = Cypress.config('viewportWidth')
    const h = Cypress.config('viewportHeight')
    if (!features) {
        features = `width=${w}, height=${h}`
    }
    console.log('openWindow %s "%s"', url, features)

    return new Promise(resolve => {
        if (window.top.aut) {
            console.log('window exists already')
            window.top.aut.close()
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
        window.top.aut = window.top.open(url, 'aut', features)

        // letting page enough time to load and set "document.domain = localhost"
        // so we can access it
        setTimeout(() => {
            cy.state('document', window.top.aut.document)
            cy.state('window', window.top.aut)
            resolve()
        }, 10000)
    })
})

Cypress.Commands.add('new_login_session', (session_name) => {
    cy.session(session_name, () => {
        cy.visit(env("WEB_BASE_URL"));
        cy.setCookie(env('ADMIN_SESSION_NAME'), env('ADMIN_SESSION_VALUE'));

        const login = new CR_Main();

        login.goToSignIn(auth.user_login, auth.user_pass);
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

Cypress.Commands.add('add_project', (project_name) => {
    let home = new PO_Home();
    home.new_project_input_name()
        .should("be.visible")
        .type(project_name)

    home.new_project_add_button()
        .should("be.visible")
        .click({force: true});

    let project = new PO_Project();

    project.title()
        .should("be.visible")
        .and("contain.text", project_name);
})

Cypress.Commands.add('remove_project', (name) => {
    let home = new PO_Home();
    home.header
        .projects_link()
        .should("be.visible")
        .click({force: true})

    let projects = new PO_Projects();
    projects.projects_list()
        .should("be.visible")
        .contains(name)
        .parents('.items-list-item')
        .find('.fa-trash')
        .click({force: true});

    projects.projects_list()
        .should("not.contain.text", name);

    home.header.surveys_link()
        .should("be.visible")
        .click({force: true});

    let surveys = new PO_Surveys();

    surveys.search_survey_input_by_name()
        .should("be.visible")
        .type(name)

    surveys.survey_items()
        .should("be.visible")
        .and("contain.text", name);

    surveys.survey_remove_button()
        .should("be.visible")
        .click({force: true, multiple: true})

    surveys.survey_items()
        .should("not.exist");
})

Cypress.Commands.add('open_project', (name) => {
    let home = new PO_Home();
    home.header
        .projects_link()
        .should("be.visible")
        .click({force: true})

    let projects = new PO_Projects();
    projects.projects_list()
        .should("be.visible")
        .contains(name)
        .parents('.items-list-item')
        .click({force: true});
})

Cypress.Commands.add('open_survey', (name) => {
    let home = new PO_Home();
    home.header.surveys_link()
        .should("be.visible")
        .click({force: true});

    let surveys = new PO_Surveys();

    surveys.filter_survey_select_by_category()
        .should("be.visible");

    surveys.search_survey_input_by_name()
        .should("be.visible")
        .type(name)

    surveys.survey_items()
        .should("be.visible")
        .eq(0)
        .click({force: true});
})

Cypress.Commands.add('add_survey', (survey_name) => {
    let home = new PO_Home();
    home.new_survey_input_name()
        .should("be.visible")
        .type(survey_name);

    home.new_survey_add_button()
        .should("be.visible")
        .click({force: true});

    let survey_page = new PO_Survey();
    survey_page.breadcrumbs()
        .should("be.visible")
        .and("contain.text", survey_name);

})

Cypress.Commands.add('remove_survey', (survey_name) => {
    let home = new PO_Home();
    home.header.surveys_link()
        .should("be.visible")
        .click({force: true});

    let surveys = new PO_Surveys();

    surveys.filter_survey_select_by_category()
        .should("be.visible");

    surveys.search_survey_input_by_name()
        .should("be.visible")
        .clear()
        .type(survey_name)

    surveys.survey_items()
        .should("be.visible")
        .and("contain.text", survey_name);

    surveys.survey_remove_button()
        .should("be.visible")
        .click({force: true})
})

Cypress.Commands.add('add_paticipant', () => {
    let project = new PO_Project();
    project.invitations_tab()
        .should("be.visible")
        .click({force: true});

    project.invite_participants.paste_mode_button()
        .should("be.visible");

    project.invite_participants.csv_data_textarea()
        .should("be.visible")
        .clear()
        .type(test_participant);

    project.invite_participants.send_button()
        .should("be.visible")
        .click({force: true});

    project.invite_participants
        .invitations_modal
        .invitation_list()
        .should("be.visible")
        .and("include.text", 'jdoe@example.com')
        .and("include.text", 'John')
        .and("include.text", 'James');

    project.invite_participants
        .invitations_modal
        .send_invitation_button()
        .should("be.visible")
        .click({force: true});

    project.notification
        .message_info()
        .should("be.visible")
        .and("contain.text", '1 participants created, 0 updated');
})

Cypress.Commands.add('add_real_participant', (account) => {
    let project = new PO_Project();
    let temp = new TempMail();
    temp.createAccount();

    project.invitations_tab()
        .should("be.visible")
        .click({force: true});

    project.invite_participants.paste_mode_button()
        .should("be.visible");

    project.invite_participants.csv_data_textarea()
        .should("be.visible")
        .clear()
        .then(input => {
            cy.get('@account')
                .then(s => {

                    cy.log(s)
                    let first = `${'lastname' + temp.makeHash_(5)}`
                    let last = `${'firstname' + temp.makeHash_(5)}`
                    let str = "Email,MobilePhone,ParticipantIdentifier,FirstName,MiddleName,LastName,DOB,Gender,PreferredLanguage,Street1,Street2,City,State,PostalCode,SecondaryIdentifier\n" +
                        s.address + ",555-555-5555,1234593889238," + `${first}` + ",James,+" + `${last}` + "+,4/15/1965,M,en,123 Main St,Apt A,Sacramento,CA,95814,ABC123";

                    cy.wrap(input)
                        .type(str)
                });
        });

    temp.auth(cy.get('@account'));

    project.invite_participants.send_button()
        .should("be.visible")
        .click({force: true});

    project.invite_participants
        .invitations_modal
        .invitation_list()
        .should("be.visible")
        .and("have.length.above", 0);

    project.invite_participants
        .invitations_modal
        .send_invitation_button()
        .should("be.visible")
        .click({force: true});

    project.notification
        .message_info()
        .should("be.visible")
        .and("contain.text", '1 participants created, 0 updated');
})

Cypress.Commands.add('remove_paticipant', (name) => {
    let project = new PO_Project();
    project.participants_tab()
        .should("be.visible")
        .click({force: true});

    let participants = new PO_Project_Participants_list_Tab();
    participants.participants_items()
        .should("be.visible")
        .and("have.length", 1);

    participants.remove_buttons()
        .should("be.visible")
        .eq(0)
        .click({force: true})

    participants.participants_items()
        .should("not.be.visible");

    participants.no_results_line()
        .should("be.visible")
        .and("contain.text", 'No Results');
})

Cypress.Commands.add('remove_user', () => {
    cy.login(null, null, 'User Security');
    let user_security = new PO_AdminRKS_User_Security();
    user_security
        .email_input()
        .should("be.visible")
        .then(input => {
            cy.get('@account')
                .then(s => {
                    cy.log(s)
                    cy.wrap(input).type(s.address)
                });
        });

    user_security
        .search_button
        .should("be.visible")
        .click({force: true});

    user_security.delete_button()
        .should("be.visible")
        .click({force: true});

    user_security.approving_delete_button()
        .should("be.visible")
        .click({force: true});

    user_security.delete_button()
        .should("not.exist");
})

/**
 * Wait for iframe to load, and call callback
 */
Cypress.Commands.add('getElementFromFrame', ($iframe, $element) => {
    return cy.get($iframe, {timeout: 20000})
        .should("be.visible")
        .and(($iframe) => {
            expect($iframe.contents().find($element)).to.exist
        }).then(($iframe) => {
            return cy.wrap($iframe.contents().find($element))
        });
});


Cypress.Commands.add("readPdf", (inputFile) => {
    return cy.task('readPdf', {filePath: inputFile})
});