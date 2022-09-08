const express = require('express');
const Logger = require('./Logger');
var instance;

class Site {
    /**
     * @return {Site}
     * @api public
     */
    static get Instance() {
        if(!instance) throw Logger.ThrowError('No INSTANCE is defined. Have you forgot to init Site?');
        return instance;
    }

    constructor(port) {
        this.app = express();
        
        this.port = port;
        instance = this; 
    }

    addGetMethod(path,callback = (req,res) => {}) {
        this.app.get(path,callback);
        return this;
    }
    addPostMethod(path,callback = (req,res) => {}) {
        this.app.post(path,callback);
        return this;
    }
    Run() {
        this.app.get('*',(req,res) => {
            res.redirect("/notfounderr");
        })
        this.app.listen(this.port,() => {
            Logger.Log("Site has been runned on port "+this.port);
        });
        return this;
    }
}

module.exports = Site;