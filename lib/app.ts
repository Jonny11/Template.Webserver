// Typescript tutorial: https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1
// use "@types/node": "^9.6.7", this specific version is required to avoid duplicate identifier errors

import * as express from "express";
import * as bodyParser from "body-parser";
import { Application, Request, Response } from "express";
import * as requestHandler from "./request_handler";


class App {

    public app: Application;
    public system_id: string = "TYPE.SystemName";
    public root_directory: string;

    constructor() {
        this.root_directory = __dirname;
        this.app = express();
        this.applyConfig(this.app);
        this.applyRoutes(this.app);
    }

    private applyConfig(app: Application): void {
        app.use(bodyParser.json()); //support json encoded bodies
        app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies
        // app.use(express.static(this.root_directory + '/server/interface_module/webapp'));
    }

    private applyRoutes(app: Application): void {
        const router = express.Router();

        router.get('/', requestHandler.demo.hello);
        router.get('/get', requestHandler.demo.get);
        router.post('/post', requestHandler.demo.post);

        app.use("/", router);
        
    }

    public listen(port_number): void {
        const self = this;
        this.app.listen(port_number, function() {
            console.log('Express server listening on port ' + port_number);
            // console.log("servering app from directory path: " + self.root_directory + '/');
        });
    }

}

export const service = new App();