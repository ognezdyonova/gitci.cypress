const {defineConfig} = require('cypress')
const TestRaiImporter = require("tr_cypress_reporter_simple");
const path = require("path");
const fs = require("fs");
const xlsx = require("node-xlsx").default;

const downloadDirectory = path.join(__dirname, './rkstudio/', 'downloads');
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');
const findFile = (filename) => {
    const fileName = `${downloadDirectory}/${filename}`;
    const contents = fs.existsSync(fileName);
    return contents;
};

const hasFile = (filename, ms) => {
    const delay = 10;
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            return reject(
                new Error(`Could not find file ${downloadDirectory}/${filename}`)
            );
        }
        const found = findFile(filename);
        if (found) {
            return resolve(true);
        }
        setTimeout(() => {
            hasFile(filename, ms - delay).then(resolve, reject);
        }, 10);
    });
};

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        chromeWebSecurity: false,
        modifyObstructiveCode: false,
        specPattern: "rkstudio/tests/e2e/**/*.spec.js",
        supportFile: "rkstudio/support/e2e.js",
        fixturesFolder: "rkstudio/fixtures",
        videosFolder: "rkstudio/logs/videos",
        screenshotsFolder: "rkstudio/logs/screenshots",
        watchForFileChanges: false,
        globals: {
            cy: true
        },
        defaultCommandTimeout: 60000,
        pageLoadTimeout: 60000,
        waitForAnimations: true,
        projectId: "j7j39s",
        video: true,
        videoUploadOnPasses: false,
        numTestsKeptInMemory: 9,
        experimentalRunEvents: true,
        experimentalSourceRewriting: true,
        experimentalSessionAndOrigin:true,
        screenshotOnRunFailure: true,
        trashAssetsBeforeRuns: false,
        retries: {
            runMode: 0,
            openMode: 0
        },
        keystrokeDelay: 25,
        videoCompression: false,
        setupNodeEvents(on, config) {
            AllureWriter(on, config);
            let mainPath = "./rkstudio/constants/variables/.env.";
            let pathJerry = "./rkstudio/constants/variables/.env.dev";

            if (process.env.HRS_ENV) {
                mainPath += process.env.HRS_ENV
            } else {
                mainPath = pathJerry;
            }

            let configWithDotenv = require('dotenv').config({path: path.resolve(mainPath), debug: false});
            if (configWithDotenv.error) {
                throw configWithDotenv.error;
            }
            let env = {...config.env, ...configWithDotenv.parsed};
            let result = {...config, env};


            on("before:browser:launch", (browser = {}, launchOptions) => {
                if (!fs.existsSync(downloadDirectory)) {
                    fs.mkdirSync(downloadDirectory);
                }

                if (browser.name === "chrome") {
                    /*@deepuec - Installing the chrome extension below in the browser (operated by Cypress) would fix the issue you are getting. Cheers!
                    https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe*/

                    launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
                    launchOptions.args.push("--load-extension=./rkstudio/extensions/Ignore-X-Frame-headers");
                    launchOptions.args.push("--start-fullscreen");
                    launchOptions.args.push('--incognito');
                    launchOptions.args.push('--disable-dev-shm-usage');
                    launchOptions.args.push('--disable-gpu');
                    launchOptions.args.push('--disable-site-isolation-trials');
                    //set downloads dir
                    launchOptions.preferences.default['download'] = {default_directory: downloadDirectory};
                    //enable multiple files download for consecutive running e2e
                    launchOptions.preferences.default.default_content_setting_values = {automatic_downloads: 1};

                    return launchOptions;
                }
                // Cypress.lifecycle({
                //     clearApp: true,
                //     clearInternals: true, // leave this on
                //     clearCookies: true, // nope
                //     clearLocalStorage: true,  // nope
                //     clearSessionStorage: true, // nope
                // })
                return config;
            });

            on('after:run', (run, results) => {
                // let tr = new TestRaiImporter(run);
                // tr.saveArtifact('rkstudio/fixtures/run/')
            })

            on('task', {
                cleanupDownloads() {
                    fs.readdir(downloadDirectory, (err, files) => {
                        if (err) throw err;

                        for (const file of files) {
                            fs.unlink(path.join(downloadDirectory, file), err => {
                                if (err) throw err;
                            });
                        }
                    });
                    //to make cypress happy
                    return null;
                },

                isExistDownloadFile(filename, ms = 5000) {
                    console.log(
                        `looking for file in ${downloadDirectory}`,
                        filename,
                        ms
                    );
                    return hasFile(filename, ms);
                },
            });

            on("task", {
                parseXlsx({filePath}) {
                    return new Promise((resolve, reject) => {
                        try {
                            const jsonData = xlsx.parse(fs.readFileSync(filePath));
                            resolve(jsonData);
                        } catch (e) {
                            reject(e);
                        }
                    });
                }
            });

            return result;
        }
    }
})