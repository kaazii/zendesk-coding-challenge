import fetch from 'node-fetch'
import { formatTicket, formatAllTickets } from '../display/formatter.js'

export const retrieveTickets = async function () {
    const token = process.env.TOKEN
    const email = process.env.EMAIL
    const subdomain = process.env.SUBDOMAIN

    const authenticator = `${email}/token:${token}`

    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets.json?page=1&per_page=25`, {
        method : 'GET', 
        headers : {'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64')}
    })
    const output = await response.json()
    formatAllTickets(output)
}

export const retrieveSpecificTicket = async function (id) {
    const token = process.env.TOKEN
    const email = process.env.EMAIL
    const subdomain = process.env.SUBDOMAIN

    const authenticator = `${email}/token:${token}`

    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets/123.json`, {
        method : 'GET', 
        headers : {'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64')}
    })

    const output = await response.json()
    formatTicket(output)
}