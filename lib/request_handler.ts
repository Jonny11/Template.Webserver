// LOGIC FOR HANDLING REST REQUESTS

// ============ Import dependencies ============ 
import * as url from "url";
import { Request, Response } from "express";

// ============ Helper methods ============ 
function log(request: Request, response: Response): void{
    var pathname = url.parse(request.url).pathname;
    console.log("request.connection:", request.connection);
	var user = request.connection.remoteAddress;
	var time = new Date();
	var now = time.getFullYear() + "." + format(time.getMonth() + 1) + "." + format(time.getDate()) 
			+ "-" + format(time.getHours()) + ":" + format(time.getMinutes()) + ":" + format(time.getSeconds());
 	
 	var message = "request for resource '" + pathname + "' recieved from " + user + " @ " + now;
 	
 	console.log(message);

 	function format(my_number: number){
 		return ("0" + my_number).slice(-2);
 	}
}


// ============ Request handler implementations ============ 

class Demo{

    constructor(){}

    public hello (request: Request, response: Response): void{
		log(request,response);
		response.status(200).send('hello world!');
    }

	public get (request: Request, response: Response){
		log(request,response);
		var var1 = request.query['var1'];
		var var2 = request.query['var2'];
		response.status(200).send('var1: ' + var1 + ' var2: ' + var2);
	}

	public post (request: Request, response: Response){
		log(request,response);
		var var1 = request.body.var1;
		var var2 = request.body.var2;
		response.status(200).send(request.body);
	}
}

export const demo = new Demo();






