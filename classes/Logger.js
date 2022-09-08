const logs = [];

class Logger {
    static Log(msg) {
        var msgLog = `INFO | ${new Date().toLocaleDateString()} | ${msg}`
        logs.push(msgLog);
        console.log(msgLog);
    }
    static Error(msg) {
        var msgError = `ERROR | ${new Date().toLocaleDateString()} | ${msg}`
        logs.push(msgError);
        console.error(msgError);
    }
    static ThrowError(msg) {
        this.Error(msg);
        throw new Error(msg);
    }
    static GetLogs() {
        return logs;
    }
}

module.exports = Logger;