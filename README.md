# cypressUITemplate
Faster template for writing tests on cypress

Start writing tests:
 - Clone this repository from https://github.com/ognezdyonova/cypressUITemplate.git
 - Update dependencies 'npm install' from root repository 
 - Rename the project_name folder to your project name 
 - Set new project name to the cypress.json file 

 # Folders
 
 - api-requests: Folder for additional api requests for test configuration

   - --> constants: folder containing additional constant files for api tests(e.g Endpoints.js)   
   - --> core/requests: Here are the files with api requests
 - constants: Folder for additional constants for cypress tests 
   
   - --> variables: you can save the env variables for different env. Create a file using a mask .env.[env name] .Get data from variable env("API_GATEWAY_URL")
   - --> variables/EnvVarLoader.js - you need to init all files of variables 

 - extensions: You can connect some extensions to the browser 
 - fixtures: folder for savin some generated data and scripts for generating 
 - pages: page objects
 - plugins: cypress plugins initialization 