const NodeCache = require('node-cache');

const cacheProvider = new NodeCache();

module.exports = {
    setKey(key, payload) {
        cacheProvider.set(key, payload);
    },
    getKey(key) {
        return cacheProvider.get(key);
    },
    getAllKeys() {
        return cacheProvider.keys();
    }
}