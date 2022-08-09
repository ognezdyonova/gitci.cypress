# RkStudio Cypress tests

First you need to install:

- node 16+
- Java 8+
- your IDE

Start running tests:

- Need to clone all source to your folder`git clone https://github.com/CareEvolution/rkstudio.cypress_tests.git`
- Open project in your IDE
- First, you need to install all dependencies `npm install`
- After you open the `package.json` file in the scripts section, you should see a list of commands for running scripts
  and generating reports

  _**But you can run tests and get reports without using the code editor, just go to the root of the project through the
  console and start executing
  the provided commands.**_
- To run the tests, you need to run the command in the terminal `npm run cy:run`
- After running the tests, a new **_allure-results_** folder should appear
- To generate a report, execute the commands one by one
    - `npm run allure:history`
    - `npm run allure:report`
    - `npm run allure:server`

