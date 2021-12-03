
export const formatAllTickets = function (tickets) {
    const numPages = Math.ceil(tickets.count/25)
    const numTickets = tickets.count

    for (var i = 0; i < 1; i++){
        printTickets(tickets, 25)
    } 
}

export const formatTicket = function (ticket) {
    const id =  ticket.ticket.id
    const created_at = ticket.ticket.created_at
    const description = ticket.ticket.description
    const submitter_id = ticket.ticket.submitter_id
    const subject = ticket.ticket.subject

    const output = `Ticket ID: ${id} \nSubmitter: ${submitter_id} \nCreated at: ${created_at} \nDescription: ${description}\n`
    console.log(output)
}

function printTickets (tickets, numTickets) {

    for (var i = 0; i < numTickets; i++){
        const id =  tickets.tickets[i].id
        const created_at = tickets.tickets[i].created_at
        const subject = tickets.tickets[i].subject
        const submitter_id = tickets.tickets[i].submitter_id
        console.log(`Ticket ID: ${id} || Created at: ${created_at} || Submitter: ${submitter_id} || Subject: ${subject}`)
    }
}