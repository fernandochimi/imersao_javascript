function cannotConnectToServerError(url) {
    this.message = "Could not connect to server " + url;
    this.name = "cannotConnectToServerError";
}

cannotConnectToServerError.prototype = Error.prototype;

function doAjaxRequest(url, parameters) {
    var success = false;
    sendRequest(url, parameters);
    if (!success) {
        throw new cannotConnectToServerError(url);
    }
}

try {
    doAjaxRequest("http://example.com", {some: "parameter"});
} catch (e) {
    if (e.name === "cannotConnectToServerError") {
        console.log(e.message);
    } else {
        throw e;
    }
}