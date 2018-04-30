"use strict";
// Typescript tutorial: https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1
// use "@types/node": "^9.6.7", this specific version is required to avoid duplicate identifier errors
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const requestHandler = require("./request_handler");
class App {
    constructor() {
        this.system_id = "TYPE.SystemName";
        this.root_directory = __dirname;
        this.app = express();
        this.applyConfig(this.app);
        this.applyRoutes(this.app);
    }
    applyConfig(app) {
        app.use(bodyParser.json()); //support json encoded bodies
        app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies
        // app.use(express.static(this.root_directory + '/server/interface_module/webapp'));
    }
    applyRoutes(app) {
        const router = express.Router();
        router.get('/', requestHandler.demo.hello);
        router.get('/get', requestHandler.demo.get);
        router.post('/post', requestHandler.demo.post);
        app.use("/", router);
    }
    listen(port_number) {
        const self = this;
        this.app.listen(port_number, function () {
            console.log('Express server listening on port ' + port_number);
            // console.log("servering app from directory path: " + self.root_directory + '/');
        });
    }
}
exports.service = new App();
//# sourceMappingURL=app.js.map