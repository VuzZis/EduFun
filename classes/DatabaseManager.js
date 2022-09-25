const fs = require('fs');
const DatabaseUser = require('./DatabaseUser');
class Database {

    constructor() {
        fs.mkdir('./database',() => {});
        fs.mkdir('./database/users',() => {});
    }

    readUserList(guildId) {

    }

    hasUser(userId) {
        return fs.existsSync(`./database/users/${userId}.json`);
    }

    cloneUser(oldGuildId,newGuildId,oldUserId,newUserId) {
        this.writeUser(newGuildId,newUserId,this.readUser(oldGuildId,oldUserId));
    }

    readUser(userId) {
        var user;
        fs.mkdir(`./database/users/`,() => {})
        var data = JSON.parse(fs.readFileSync(`./database/users/${userId}.json`,'utf8'));
        if(!data) {
            let defaultData = {
                id : userId
            }
            user = new DatabaseUser(defaultData);
            fs.writeFile(`./database/users/${userId}.json`,JSON.stringify(user.transferToData(),null,4),(err) => {if(err) console.log(err.message)});
        } else {
            user = new DatabaseUser(data);
        }
        return user;
    }

    isPasswordCorrect(userId,password) {
        let user = this.readUser(userId);
        return(user.getPassword() == password);
    }

    writeUser(userId,user) {
        fs.mkdir(`./database/users/`,() => {});
        fs.writeFile(`./database/users/${userId}.json`,JSON.stringify(user.transferToData(),null,4),(err) => {if(err) console.log(err.message)});
    }

    static getInstance() {
        return new Database();
    }

}

module.exports = Database;