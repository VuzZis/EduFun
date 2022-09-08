const fs = require('fs');
const Logger = require('../classes/Logger');
const PageManager = require('../classes/PageManager');
const Site = require('../classes/Site');

const pageFiles = fs.readdirSync('./requests/get/pages/').filter(file => file.endsWith('.js'));

for(const file of pageFiles) {
    let page = require('../requests/get/pages/'+file);
    Logger.Log("Loaded Page: "+JSON.stringify(page));
    PageManager.Instance.addPage(page);
    Site.Instance.addGetMethod("/"+page.id,page.callback)
}