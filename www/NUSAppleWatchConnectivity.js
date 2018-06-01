var exec = require('cordova/exec');

exports.init = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "NUSAppleWatchConnectivity", "init", []);
};

exports.messageReceiver = function (onNewMessageCallback, errorCallback) {
    exec(onNewMessageCallback, errorCallback, "NUSAppleWatchConnectivity", "messageReceiver", []);
};

exports.sendMessage = function (message, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "NUSAppleWatchConnectivity", "sendMessage", [message]);
};
