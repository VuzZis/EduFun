const Logger = require('./classes/Logger');
const PageManager = require('./classes/PageManager');
const Site = require('./classes/Site');
new Site(3000)
new PageManager();

let site = Site.Instance;

[   './handler/pages'
    
].forEach(e => {require(e)});

site.Run();