# Zendesk-Coding-Challenge
This is my submission for the 2021 Zendesk Coding Challenge. I chose to use Node.js to further challenge my self because it's not something that i'm very familiar with. Overall I had a lot of fun and learnt a lot through this experience!

# Brief Overview
Zendesk is a company that focuses on customer service. From my understanding, if you have a domain with zendesk, customers can submit tickets with issues that they may be facing. That's where their API comes in. I got my own domain and populated it with dummy tickets. Then, I use their API to fetch those tickets and allow users to interact with them.

# Task
For this program, I need to be get familiar with the Zendesk API. The requirements are pretty straight forward:
- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a list
- Display individual ticket details
- Page through tickets when more than 25 are returned
- Write tests that cover my code

# What software versions I used
 - Node.js version 16.x or later
 - NPM version 8.x or later

# How to run
1. Clone this repository using:
```
 $ git clone https://github.com/kaazii/zendesk-coding-challenge
```
2. Run this command to install all of the modules you will need:
```
$ npm install
```
3. To run the program:
```
$ npm start
```
4. Finally, to test the program:
```
npm test
```
# File Structure
- `app.js` This is the 'main' of my program. I ask users for initial input here, and pass that to relative functions.
- `util.js` This is where I store functions that get input from users, as well as the function that calls the API.
- `zendesk.js` This is a sort of middle man where I take the output from the API call, and pass it to the module that will process it.
- `formatter.js` Finally, this file is responsible for parsing the tickets and outputting them to the console.

# Conclusion
I am very proud of myself for how far I got in this project. I used a language that I am not familiar with, and was able to come up with something that satisfied *most* of the requirements. I feel that I could have done a lot better with making my code more testable from the get-go. However, I will take this as a learning experience and try to improve on my coding skills. I wil definitely be continuing to code in Node.js! 

I thoroughly enjoyed this experience! Thank you so much for this opportunity, Zendesk.
