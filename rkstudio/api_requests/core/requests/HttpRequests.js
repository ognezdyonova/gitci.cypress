const RequestApi = require("../RequestApi");

import * as Endpoints from "../../constants/Endpoints";

class HttpRequests {

    constructor() {
        this.request = new RequestApi(Endpoints.BASE_URI);
    }
}

export default HttpRequests;
