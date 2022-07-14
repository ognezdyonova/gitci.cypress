'use strict';
const qs = require('querystring');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const unirest = require('unirest');
import * as TempData from "./requests/tmp/RequestsTempData";

class RequestApi {
    query_params = null;

    constructor(host) {
        this.host = host;
        this.xhr_form = new XMLHttpRequest();
        this.xhr_form.withCredentials = false;
    }

    apiGet(token, apiMethod, queryVariables) {
        let url = this.host + apiMethod;
        return this._call('get', url, queryVariables, token, null);
    };

    apiPost(token, apiMethod, body, queryVariables) {
        let url = this.host + apiMethod;
        return this._call('post', url, queryVariables, token, body);
    };

    apiPostForm(token, apiMethod, body, queryVariables) {
        let url = this.host + apiMethod;
        return this._call_form('post', url, queryVariables, token, body);
    };

    apiPut(token, apiMethod, body, queryVariables) {
        let url = this.host + apiMethod;
        return this._call('put', url, queryVariables, token, body);
    };

    apiPatch(token, apiMethod, body, queryVariables) {
        let url = this.host + apiMethod;
        return this._call('patch', url, queryVariables, token, body);
    };

    apiDelete(token, apiMethod, body, queryVariables) {
        let url = this.host + apiMethod;
        return this._call('delete', url, queryVariables, token, body);
    };

    addQueryParam(str) {
        this.query_params = qs.parse(str);
    }

    _call(method, url, queryVariables, token, body) {
        console.log('\n\n Request:================================>');
        let xmlHttp = new XMLHttpRequest();
        if(typeof  queryVariables === 'string' || queryVariables instanceof String){
            url += '?' + queryVariables;
        } else if (queryVariables != null) {
            url += '?' + qs.stringify(queryVariables);
        } else if (this.query_params != null) {
            url += '?' + qs.stringify(this.query_params);
        } else {
            url += ''
        }

        xmlHttp.open(method, url, false);
        xmlHttp.setDisableHeaderCheck(true);
        if (token !== null) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token);
        }
        let URl = new URL(url);

        xmlHttp.setRequestHeader('Cache-Control','no-cache');
        xmlHttp.setRequestHeader('Host',  URl.host);
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.setRequestHeader('Accept', 'application/json');

        if (body !== null)
            xmlHttp.send(body);
        else
            xmlHttp.send();

        console.log('Request URL: ' + URl);
        console.log('Status code: ' + xmlHttp.status);
        console.log("Token: " + token);
        console.log("Response Headers:\n" + xmlHttp.getAllResponseHeaders());

        // if (body !== null)
        //     console.log("Body: \n" + JSON.stringify(body));
        // else
        //     console.log("Body: \n");

        // console.log("Request headers: \n--->" + xmlHttp.getRequestHeader('authorization') + "\n--->" + xmlHttp.getRequestHeader('cookie'));
        // console.log("Response: \n" + xmlHttp.responseText);
        console.log('END:================================>\n');

        if (xmlHttp.status !== 500) {
            try {
                return JSON.parse(xmlHttp.responseText);
            } catch (e) {
                return xmlHttp.responseText;
            }
        } else {
            return xmlHttp.status;
        }
    }

    _call_form(method, url, queryVariables, token, body) {
        console.log('\n\n\ Request:================================>');

        if (queryVariables != null) {
            url += '?' + qs.stringify(queryVariables);
        } else if (this.query_params != null) {
            url += '?' + qs.stringify(this.query_params);
        } else {
            url += ''
        }

        this.xhr_form.url = url
        this.xhr_form.open(method, url, false);
        if (token != null && this.xhr_form.getRequestHeader('cookie') === '') {
            this.xhr_form.setRequestHeader("cookie", token);
        }

        this.xhr_form.setDisableHeaderCheck(true);
        if (this.xhr_form.getRequestHeader('authorization') === '') {
            this.xhr_form.setRequestHeader('authorization', TempData.admin_basic_token);
        }
        this.xhr_form.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=ISO-8859-1");
        this.xhr_form.setRequestHeader('Accept', '*/*');
        this.xhr_form.send(qs.stringify(body));

        this.xhr_form.onreadystatechange = () => {
            if (this.readyState === 4) {
                console.log(this.xhr_form.responseText);
            }
        }

        console.log('Request URL: ' + url);
        console.log('Status code: ' + this.xhr_form.status);
        console.log("Token: " + token);
        console.log("Response Headers:\n" + this.xhr_form.getAllResponseHeaders());
        console.log("Body: " + qs.stringify(body));
        console.log("Request headers: \n--->" + this.xhr_form.getRequestHeader('authorization') + "\n--->" + this.xhr_form.getRequestHeader('cookie'));
        console.log('END:================================>\n');
        return this.xhr_form;
    }
}

module.exports = RequestApi;