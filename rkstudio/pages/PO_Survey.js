import PO_Header from "./PO_Header";
import PO_SaveAndPublishModal from "./modals/PO_SaveAndPublishModal";
import PO_SurveyContentPreview from "./modals/PO_SurveyContentPreview";

class PO_Survey {
    constructor() {
        this.header = new PO_Header()
        this.save_and_publish_modal = new PO_SaveAndPublishModal();
        this.survey_content_preview = new PO_SurveyContentPreview();
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    breadcrumbs() {
        return cy.get('.selected-item-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_editor_tab() {
        return cy.get('[ng-click="selectedEditorSection = \'template\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_settings_tab() {
        return cy.get('[ng-click="selectedEditorSection = \'properties\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_share_tab() {
        return cy.get('[ng-click="selectedEditorSection = \'share\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    version_button() {
        return cy.get('[ng-class="{open:showVersions}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    validations_button() {
        return cy.get('[ng-class="{open:showValidationErrors}"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    publish_button() {
        return cy.get('[ng-click="publishCurrentVersion()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    force_publish_current_version_button() {
        return cy.get('[ng-click="publishCurrentVersion()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_new_version_button() {
        return cy.get('[ng-click="saveNewVersion()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_and_publish_new_version_button() {
        return cy.get('[ng-click="saveAndPublishNewVersion()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    revert_changes_button() {
        return cy.get('[ng-click="revert()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    save_to_pdf_button() {
        return cy.get('[ng-click="saveToPdf()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    edit_raw_template_button() {
        return cy.get('[ng-click="editRawTemplate()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    toggle_to_fullscreen_button() {
        return cy.get('[ng-click="toggleFullScreen()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_overview_tab_button() {
        return cy.get('[ng-click="selectedTab = \'overview\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_look_and_feel_tab_button() {
        return cy.get('[ng-click="selectedTab = \'look-and-feel\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_properties_tab_button() {
        return cy.get('[ng-click="selectedTab = \'properties\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_navigation_tab_button() {
        return cy.get('[ng-click="selectedTab = \'navigation\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_validation_tab_button() {
        return cy.get('[ng-click="selectedTab = \'validation\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_overview_tab() {
        return cy.get('[ng-show="selectedTab == \'overview\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_look_and_feel_tab() {
        return cy.get('[ng-click="selectedTab = \'look-and-feel\'"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    editor_template_viewer() {
        return cy.get('.template-viewer');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_fields_notes_label() {
        return cy.get('.field-notes');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_name_survey_input() {
        return cy.get('[ng-model="selectedSurvey.Name"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_display_name_survey_input() {
        return cy.get('[ng-model="getLocalizableEditModel(displayNameLocale).DisplayName"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_display_name_locale_survey_select() {
        return cy.get('[ng-model="displayNameLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_description_locale_survey_select() {
        return cy.get('[ng-model="descriptionLocale"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_description_text_survey_input() {
        return cy.get('[ng-model="getLocalizableEditModel(descriptionLocale).Description"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_category_survey_select() {
        return cy.get('[ng-model="categoryOption"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_selected_category_survey_input() {
        return cy.get('[ng-model="selectedSurvey.Category"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_results_can_be_deleted_checkbox() {
        return cy.get('[ng-model="selectedSurvey.ResultCanBeDeleted"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_allow_task_completion_via_link_checkbox() {
        return cy.get('[ng-model="selectedSurvey.AllowTaskCompletionViaLink"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    settings_save_survey_properties_button() {
        return cy.get('[ng-click="saveSurveyProperties(survey)"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_title() {
        return cy.get('[ng-show="!selectedSurvey.IsShared"] > .section-header-title');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_description() {
        return cy.get('[ng-show="selectedEditorSection == \'share\'"] p');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    share_enable_button() {
        return cy.get('[ng-show="selectedEditorSection == \'share\'"] .confirm-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_survey_step() {
        return cy.get('[ng-show="!loading && !template.steps.length && (template.type == \'RKStudioOrderedTask\' || template.type == \'RKStudioNavigableOrderedTask\')"] > [ng-click="addStep()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    add_consent() {
        return cy.get('[ng-click="addDefaultConsent()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    slides() {
        return cy.get('.slider-step');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    default_value_input() {
        return cy.get('[ng-model="templateElement.answerFormat.defaultValue"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    next_slide_button() {
        return cy.get('.template-viewer > template-slider.ng-isolate-scope > .template-slider > .right-arrow');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_type_select() {
        return cy.get('[ng-change="changedTemplateType()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    survey_localization_type_select() {
        return cy.get('[ng-model="localeToAdd"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    version_items_from_list() {
        return cy.get('[ng-show="showVersions"] .dropdown-content-box tr');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    try_it_out_button() {
        return cy.get('.preview-button');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    try_it_out_for_participant_button() {
        return cy.get('[ng-click="toggleParticipantDropdown()"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    preview_participant_id_button() {
        return cy.get('[ng-model="previewParticipantIdentifier"]');
    }

    /**
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    steps_list() {
        return cy.get('.template-step-list-wrapper tbody tr');
    }
}

export default PO_Survey;