const GetRequest = require('./GetRequest');

class Page extends GetRequest {
    /**
     * 
     * @return {Site}
     */
    constructor(callback,id) {
        super(callback);
        this.callback = callback;
        this.id = id;
    }
    build() {
        return({path : "/"+this.id, id : this.id,callback : this.callback});
    }
}

module.exports = Page;