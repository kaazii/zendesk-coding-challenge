import fetch from 'node-fetch'
import { formatTicket, formatAllTickets } from '../display/formatter.js'

export const retrieveTickets = async function () {
    const token = process.env.TOKEN
    const email = process.env.EMAIL
    const subdomain = process.env.SUBDOMAIN

    const authenticator = `${email}/token:${token}`

    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets.json?page=1&per_page=25`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
    })

    const output = await response.json()

    if (output.error) {
        console.log("\n" + output.error)
        return;
    }

    await formatAllTickets(output)
}

export const retrieveTicketsSpecificPage = async function (page) {
    const token = process.env.TOKEN
    const email = process.env.EMAIL
    const subdomain = process.env.SUBDOMAIN

    const authenticator = `${email}/token:${token}`

    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets.json?page=${page}&per_page=25`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
    })

    const output = await response.json()

    if (output.error) {
        console.log("\n" + output.error)
        return;
    }

    return output
}

export const retrieveSpecificTicket = async function (id) {
    const token = process.env.TOKEN
    const email = process.env.EMAIL
    const subdomain = process.env.SUBDOMAIN

    const authenticator = `${email}/token:${token}`

    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets/${id}.json`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
    })

    const output = await response.json()

    if (output.error) {
        console.log("\n" + output.error)
        return;
    }

    formatTicket(output)
}