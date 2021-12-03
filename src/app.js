import { getInput } from './util/util.js'
import { retrieveSpecificTicket, retrieveTickets } from './api/zendesk.js'
import dotenv from 'dotenv'

const result = dotenv.config()

if (result.error) {
    throw result.error
}

(async () => {
    while (true) {
        var input = getInput("\nPlease Choose an option:\n"
        + "1) Retrieve all tickets\n"
        + "2) Retrieve a specific ticket\n"
        + "3) Exit\n")
        switch (input) {
            case "1":
                await retrieveTickets()
                break;
            case "2":
                var id = getInput("\nEnter a ticket ID: ")
                await retrieveSpecificTicket(id)
                break;
            case "3":
                process.exit(0)
                break;
            default:
                console.log("No such option. Please enter another: \n");
        }
    }
})().catch( err => {
    console.log(err)
})