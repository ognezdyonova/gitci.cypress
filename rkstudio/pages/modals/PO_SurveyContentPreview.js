class PO_SurveyContentPreview {
    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    step_label() {
        return cy.get('survey-modal [ng-show="stepManager.showStepHeader()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    cancel_button() {
        return cy.get('survey-modal cancel-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    cancel_header_button() {
        return cy.get('.header > .cancel-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    text_instructions() {
        return cy.get('survey-modal instruction-step .instruction-step-text');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    continue_button() {
        return cy.get('survey-modal instruction-step .continue-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    done_button() {
        return cy.get('[ng-show="!vm.loading"] > survey-step.ng-isolate-scope > .survey-step > [ng-if="!templateValidationErrors.length && render"] > [on="stepManager.step.type"] > [ng-switch-when="QuestionStep"] > question-step.ng-isolate-scope > [ng-controller="questionStepController"] > .footer > .continue-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    next_button() {
        return cy.get('[ng-show="!vm.loading"] > survey-step.ng-isolate-scope > .survey-step > [ng-if="!templateValidationErrors.length && render"] > [on="stepManager.step.type"] > [ng-switch-when="FormStep"] > form-step.ng-isolate-scope > [ng-controller="formStepController"] > .footer > .continue-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    agree_button() {
        return cy.get('[ng-show="!vm.loading"] > survey-step.ng-isolate-scope > .survey-step > [ng-if="!templateValidationErrors.length && render"] > [ng-switch=""] > [ng-switch-when="ConsentStep"] > consent-review-step.ng-isolate-scope > [ng-controller="consentReviewStepController"] > .consent-review > .toolbar > .continue-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    answer_input() {
        return cy.get('[ng-show="!vm.loading"] > survey-step.ng-isolate-scope > .survey-step > [ng-if="!templateValidationErrors.length && render"] > [on="stepManager.step.type"] > [ng-switch-when="QuestionStep"] > question-step.ng-isolate-scope > [ng-controller="questionStepController"] > .current-step > .step-content > .ng-isolate-scope > [ng-switch=""] > .answer-format-text-answer > .text-answer > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    is_over18_radio() {
        return cy.get(':nth-child(3) > .ng-isolate-scope > [ng-switch=""] > div.ng-scope > .answer-format-text-choice > :nth-child(1) > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    lives_in_america_radio() {
        return cy.get('[ng-show="!vm.loading"] > survey-step.ng-isolate-scope > .survey-step > [ng-if="!templateValidationErrors.length && render"] > [on="stepManager.step.type"] > [ng-switch-when="FormStep"] > form-step.ng-isolate-scope > [ng-controller="formStepController"] > .current-step > .step-content > :nth-child(4) > .ng-isolate-scope > [ng-switch=""] > div.ng-scope > .answer-format-text-choice > :nth-child(1) > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    first_name_input() {
        return cy.get(':nth-child(3) > .ng-isolate-scope > [ng-switch=""] > .answer-format-text-answer > .text-answer > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    last_name_input() {
        return cy.get(':nth-child(4) > .ng-isolate-scope > [ng-switch=""] > .answer-format-text-answer > .text-answer > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    gender_select() {
        return cy.get('[ng-switch=""] > div.ng-scope > .answer-format-text-answer > .text-answer > .ng-pristine');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    date_input() {
        return cy.get('.form-control');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    first_name_consent_input() {
        return cy.get('#consent_first_name');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    last_name_consent_input() {
        return cy.get('#consent_last_name');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    signature_line() {
        return cy.get('.signature-line');
    }
}

export default PO_SurveyContentPreview;