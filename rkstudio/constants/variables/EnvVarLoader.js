'use strict';
const dotenv = require('dotenv')
const pathJerry = "../../../rkstudio/constants/variables/.env.dev";
const mainPath = "../../../rkstudio/constants/variables/.env.";

class EnvVarLoader {

    static get(name) {
        let path = pathJerry; /// default

        if (this.fromCI())
            path = mainPath + this.fromCI();

        let ready = dotenv.config({path: path, debug: false})
        if (ready.error) {
            if (ready.error.message.includes("no such file or directory")) {
                throw ready.error;
            }
        }
        if (name)
            return ready.parsed[name];
        else
            return ready.parsed;
    }

    static fromCI() {
        try {
            if (process.env.HRS_ENV) {
                return process.env.HRS_ENV;
            }
        } catch (e) {
            return null;
        }
    }

}

module.exports = EnvVarLoader;