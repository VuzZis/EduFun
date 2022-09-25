const Logger = require('./classes/Logger');
const PageManager = require('./classes/PageManager');
const Database = require('./classes/DatabaseManager');
const Site = require('./classes/Site');
const DatabaseUser = require('./classes/DatabaseUser');
new Site(3000)
new PageManager();

let site = Site.Instance;

[   './handler/pages'
    
].forEach(e => {require(e)});
site.addGetMethod("/api/get-userdata/:userId",(req,res) => {
    const {userId} = req.params;
    let database = Database.getInstance();
    if(database.hasUser(userId)) {
        var data = database.readUser(userId).transferToData();
        data.password = "";
        res.send(data);
    }
    else res.send({});
})
site.addGetMethod("/api/is-valid-password/:userId/:passwordId",(req,res) => {
    const {userId,passwordId} = req.params;
    let database = Database.getInstance();
    var ans = (database.isPasswordCorrect(userId,passwordId)) && database.hasUser(userId);
    res.send({ answer : ans });
})
site.addGetMethod("/api/getlogs/",(req,res) => {
    res.send({ logs : Logger.GetLogs().join("\n") });
})
site.addGetMethod("/api/create-user/:userId/:passwordId",(req,res) => {
    const {userId,passwordId} = req.params;
    let database = Database.getInstance();
    if(!database.hasUser(userId)) {
        database.writeUser(userId,new DatabaseUser({
            id : userId,
            password : passwordId
        }));
        res.send({a:"done"})
    } else {
        res.send({a:"already exists"});
    }
})
site.Run();