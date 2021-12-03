import { retrieveTicketsSpecificPage } from "../api/zendesk.js"
import { getInput } from '../util/util.js'

export const formatAllTickets = async function (allTickets) {
    const numTickets = allTickets.count
    var currPage = 1;

    console.log(printTickets(allTickets))

    while (true) {
        var input = getInput("\nPlease Choose an option:\n"
            + "1) Next Page\n"
            + "2) Previous Page\n"
            + "3) Back to Menu\n")
        switch (input) {
            case "1": if (numTickets > currPage * 25) {
                const nextPageTickets = await retrieveTicketsSpecificPage(++currPage)
                const output = printTickets(nextPageTickets)
                console.log(output)
            }
            else {
                console.log("\n No more pages!")
            }
                break;
            case "2": if (currPage > 1) {
                const prevPageTickets = await retrieveTicketsSpecificPage(--currPage)
                const output = printTickets(prevPageTickets)
                console.log(output)
            }
            else {
                console.log("\n Page must be greater than 0!")
            }
                break;
            case "3": return;
        }
    }
}

export const formatTicket = function (singleTicket) {
    const id = singleTicket.ticket.id
    const created_at = singleTicket.ticket.created_at
    const description = singleTicket.ticket.description
    const submitter_id = singleTicket.ticket.submitter_id
    const subject = singleTicket.ticket.subject

    const output = `\nTicket ID: ${id} \nSubmitter: ${submitter_id} \nCreated at: ${created_at} \nSubject: ${subject} \nDescription: ${description}\n`
    return output;
}

export const printTickets = function (allTickets) {
    var output = '';
    for (var ticket of allTickets.tickets) {
        const id = ticket.id
        const created_at = ticket.created_at
        const subject = ticket.subject
        const submitter_id = ticket.submitter_id
        output += `Ticket ID: ${id} || Created at: ${created_at} || Submitter: ${submitter_id} || Subject: ${subject}\n`
    }
    return output;
}