function RID(length) {
    var out = "";
    var symbols = "0123456789abcdefghijklmnopqrstuvwxyz"
    for(var i = 0; i < length; i++) {
        var r = Math.random()*symbols.length;
        r = Math.floor(r >= symbols.length ? symbols.length-1 : r);
        out+=symbols[r];
    }
    return out
}

class DatabaseUser {
    constructor(data) {
        this.data = data;
        this.getName();
        this.getId();
        this.getStatus();
        this.getPassword();
    }
    transferToData() {
        return this.data;
    }
    setPassword(pass) {
        this.data.password = pass;
    }
    getPassword() {
        return this.getVariable('password',RID(16));
    }
    getStatus() { 
        return this.getVariable('status',"guest");
    }
    getName() {
        return this.getVariable('nickname',"Гость");
    }
    getId() {
        return this.getVariable('id',RID(16));
    }
    getVariable(vari,val) {
        if(this.data.hasOwnProperty(vari)) return this.data[vari];
        this.setVariable(vari,val);
        return val;
    }
    setVariable(vari,val) {
        this.data[vari] = val;
        return this;
    }
}

module.exports = DatabaseUser;