const Page = require('../../../classes/Page');
const path = require('path');
const Logger = require('../../../classes/Logger');
const page = new Page(
    (req,res) => {
        res.end(Logger.GetLogs().join("\n"))
    },
    "logs"
).build();

module.exports = page;