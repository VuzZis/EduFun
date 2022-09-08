class GetRequest {
    constructor(callback) {
        this.callback = callback;
    }
    build(path) {
        return {callback : this.callback, path : this.path};
    }
}

module.exports = GetRequest;