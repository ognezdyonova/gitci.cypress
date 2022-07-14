'use strict';
import FormDataRequests from "./core/requests/FormDataRequests";
import HttpRequests from "./core/requests/HttpRequests";
import PatientRequests from "./core/requests/PatientRequests";

class Requests {
  constructor() {
      this.formData = new FormDataRequests();
      this.http = new HttpRequests();
  }
}
export default Requests;