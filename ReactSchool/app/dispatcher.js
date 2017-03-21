var uuid = require("node-uuid-v4");

var listeners = {};

function dispatch(payload) {
    for (var id in listeners) {
        listeners[id](payload);
    }
}

function register(cb) {
    var id = uuid()
    listeners[id] = cb;
}

module.exports = {
    register: register,
    dispatch: dispatch
}