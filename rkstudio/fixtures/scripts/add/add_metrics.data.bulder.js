import Requests from '../../../api_requests/Requests.js';
import RequestsTempData from '../../../api_requests/core/requests/tmp/RequestsTempData';

const sleep = require('sleep');
const json = require('json-update');

let requests = new Requests();
let saveData = {};
let random = new RequestsTempData();

/*Pre scripts*/

sleep.sleep(10);
json.update('../../../rkstudio/fixtures/add_metrics.json', saveData);
sleep.sleep(10);
console.log('Configured patients\n');
// console.log(saveData);
let resolve = require('path').resolve
console.log(resolve('../../../rkstudio/fixtures/add_metrics.json'));