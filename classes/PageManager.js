const Logger = require("./Logger");

var instance;
class PageManager {

    static get Instance() {
        if(!instance) throw Logger.ThrowError('No INSTANCE is defined. Have you forgot to init PageManager?');
        return instance;
    }

    constructor() {
        this.pages = new Map()
        instance = this;
    }

    addPage(page) {
        this.pages.set(page.id,page.callback);
    }

    removePage(id) {
        this.pages.delete(id);
    }

    getPage(id) {
        if(!this.hasPage(id)) return Logger.ThrowError("Page isn't found in PageManager");
        return this.pages.get(id);
    }

    hasPage(id) {
        return this.pages.has(id);
    }

}

module.exports = PageManager;