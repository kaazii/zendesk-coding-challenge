import { formatTicket, formatAllTickets } from '../display/formatter.js'
import { zendeskFetch } from '../util/util.js'

export const retrieveTickets = async function (apiFetch = zendeskFetch) {
    const url = `tickets.json?page=1&per_page=25`
    const { output, error } = await apiFetch(url)
    if (!error)
        await formatAllTickets(output)
    else {
        console.log(error)
    }
}

export const retrieveTicketsSpecificPage = async function (page, apiFetch = zendeskFetch) {
    const url = `tickets.json?page=${page}&per_page=25`
    const { output, error } = await apiFetch(url)
    if (!error)
        return output;
}

export const retrieveSpecificTicket = async function (id, apiFetch = zendeskFetch) {
    if (id < 0) {
        return ('\nID must be greater than 0!')
    }
    const url = `tickets/${id}.json`;
    const { output, error } = await apiFetch(url)
    if (!error)
        return formatTicket(output);
    else {
        return error;
    }
}