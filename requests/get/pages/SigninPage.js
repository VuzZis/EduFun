const Page = require('../../../classes/Page');
const path = require('path');
const Logger = require('../../../classes/Logger');
const page = new Page(
    (req,res) => {
        res.sendFile(path.resolve(__dirname+"../../../../")+'/htmls/signin.html');
    },
    "signin"
).build();

module.exports = page;