"use strict";
// LOGIC FOR HANDLING REST REQUESTS
Object.defineProperty(exports, "__esModule", { value: true });
// ============ Import dependencies ============ 
const url = require("url");
// ============ Helper methods ============ 
function log(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("request.connection:", request.connection);
    var user = request.connection.remoteAddress;
    var time = new Date();
    var now = time.getFullYear() + "." + format(time.getMonth() + 1) + "." + format(time.getDate())
        + "-" + format(time.getHours()) + ":" + format(time.getMinutes()) + ":" + format(time.getSeconds());
    var message = "request for resource '" + pathname + "' recieved from " + user + " @ " + now;
    console.log(message);
    function format(my_number) {
        return ("0" + my_number).slice(-2);
    }
}
// ============ Request handler implementations ============ 
class Demo {
    constructor() { }
    hello(request, response) {
        log(request, response);
        response.status(200).send('hello world!');
    }
    get(request, response) {
        log(request, response);
        var var1 = request.query['var1'];
        var var2 = request.query['var2'];
        response.status(200).send('var1: ' + var1 + ' var2: ' + var2);
    }
    post(request, response) {
        log(request, response);
        var var1 = request.body.var1;
        var var2 = request.body.var2;
        response.status(200).send(request.body);
    }
}
exports.demo = new Demo();
//# sourceMappingURL=requestHandler.js.map