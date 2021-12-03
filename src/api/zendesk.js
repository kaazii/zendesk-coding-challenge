import fetch from 'node-fetch'
import { formatTicket, formatAllTickets } from '../display/formatter.js'

export const retrieveTickets = async function () {
    const authenticator = `${process.env.EMAIL}/token:${process.env.TOKEN}`

    const response = await fetch(`https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json?page=1&per_page=25`, {
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
    const authenticator = `${process.env.EMAIL}/token:${process.env.TOKEN}`

    const response = await fetch(`https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json?page=${page}&per_page=25`, {
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
    if (id < 0){
        console.log("\n ID must be a positive number!")
        return;
    }
    const authenticator = `${process.env.EMAIL}/token:${process.env.TOKEN}`

    const response = await fetch(`https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/${id}.json`, {
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