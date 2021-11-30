import readline from 'readline'
import { retrieveTickets } from './api/zendesk.js'
import dotenv from 'dotenv'
const result = dotenv.config() 

if (result.error) {
    throw result.error
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function getInput() { 
    rl.question("Please Choose an option:\n"
        + "1) Retrieve all tickets\n"
        + "2) Retrieve a specific ticket\n"
        + "3) Exit\n"
        , function (line) {

            switch (line){
                case "1":
                    console.log("this is option 1\n");
                    retrieveTickets()
                    break;
                case "2":
                    console.log("this is option 2\n");
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("No such option. Please enter another: \n");
            }
    getInput(); //Calling this function again to ask new question
    });
};

getInput(); 