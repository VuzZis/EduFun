const Page = require('../../../classes/Page');
const path = require('path');
const Logger = require('../../../classes/Logger');
const page = new Page(
    (req,res) => {
        res.sendFile(path.resolve(__dirname+"../../../../")+'/htmls/login.html');
    },
    "login"
).build();

module.exports = page;