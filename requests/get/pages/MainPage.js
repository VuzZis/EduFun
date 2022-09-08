const Page = require('../../../classes/Page');
const path = require('path');
const page = new Page(
    (req,res) => {
        res.sendFile(path.resolve(__dirname+"../../../../")+'/htmls/mainpage.html');
    },
    ""
).build();

module.exports = page;