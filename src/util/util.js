import readlineSync from 'readline-sync'
import fetch from 'node-fetch'

export const getInput = readlineSync.question.bind(readlineSync)

export const zendeskFetch = async function (url) {
    const authenticator = `${process.env.EMAIL}/token:${process.env.TOKEN}`

    const response = await fetch(`https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/${url}`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
    })

    const output = await response.json()
    return { output, error: output.error }
}