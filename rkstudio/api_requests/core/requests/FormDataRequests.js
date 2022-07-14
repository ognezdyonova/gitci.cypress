import * as Endpoints from "../../constants/Endpoints";

const FormData = require('form-data');
const fs = require('fs');

const RequestApi = require("../RequestApi");

class FormDataRequests {
    constructor() {
        this.request = new RequestApi(Endpoints.ADMIN_BASE_URI);
    }
}

export default FormDataRequests;