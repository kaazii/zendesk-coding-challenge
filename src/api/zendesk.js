const token = process.env.TOKEN
const email = process.env.EMAIL
const subdomain = process.env.SUBDOMAIN
import fetch from 'node-fetch'
console.log(fetch)

const authenticator = `${email}/token:${token}`

export const retrieveTickets = async function () {
    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/requests.json`, {
        method : 'get', 
        headers : {'Authorization': 'Basic ' + authenticator.toString('base64')}
    })
    console.log(response)
}