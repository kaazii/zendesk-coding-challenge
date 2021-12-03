import { retrieveSpecificTicket } from "./zendesk";
import fetch from 'node-fetch'
import { zendeskFetch } from '../util/util'

test('Incorrect id', async () => {
    const output = await retrieveSpecificTicket(-1)
    expect(output).toBe("\nID must be greater than 0!")
})

test('Unauthorized', async () => {
     const dummyFetch = async function () {
        const authenticator = `johnsmith@gmail.com/token:${process.env.TOKEN}`
    
        const response = await fetch(`https://zcckazi.zendesk.com/api/v2/tickets/105.json`, {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
        })
    
        const output = await response.json()
        return { output, error: output.error }
    }

    const output = await retrieveSpecificTicket(105, dummyFetch)
    expect(output).toBe("Couldn't authenticate you")
})

test('Record not found', async() => {
    const dummyFetch = async function () {
        const authenticator = 'uwaiskazi97@gmail.com/token:XgJfeIFjjJ6bCgJPGcd5iq4yPOIoouNEY882xLt'
    
        const response = await fetch('https://zcckazi.zendesk.com/api/v2/tickets/500.json', {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + Buffer.from(authenticator).toString('base64') }
        })
    
        const output = await response.json()
        expect(output).toBe("RecordNotFound")
    }
})