import TestRaiImporter from "tr_cypress_reporter_simple";

let tr = new TestRaiImporter();

tr.createSections('../run/')
tr.addCasesFromArtifacts('../run/');
tr.importStatusesToNewRunFromArtifacts(false, '../run/');


// node -r esm tr_deploy/tr.deploy.js
