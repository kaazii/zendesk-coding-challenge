# Zendesk-Coding-Challenge
This is my submission for the 2021 Zendesk Coding Challenge. I chose to use Node.js to further challenge my self because it's not something that I'm very familiar with. 

# Brief Overview
Zendesk is a company that focuses on customer service. From my understanding, if you have a domain with zendesk, customers can submit tickets with issues that they may be facing. That's where their API comes in. I created my own domain and populated it with dummy tickets. Then, I use their API to fetch those tickets and allow users to interact with them on a basic level.

# Task
For this challenge, I needed to become familiar with the Zendesk API. The requirements are pretty straight forward:
- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a list
- Display individual ticket details
- Page through tickets when more than 25 are returned
- Write tests that cover my code

Furthermore, I had the opportunity to choose between a UI that is browser-based, or CLI - I chose the latter.

# Software Versions
 - Node.js version 16.13.1 
 - NPM version 8.1.2

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
$ npm test
```
# File Structure
- `app.js` This is the 'main' of the program. It retrieves input from the users, and passes it to relative functions.
- `util.js` This is where functions that are used repeatedly are stored. One receives input from users, the other fetches tickets from the Zendesk API.
- `zendesk.js` This is a sort of middle man where the output from the API call is passed on to the module that will process it.
- `formatter.js` Finally, this file is responsible for parsing the tickets and outputting them to the console.

# Conclusion
I am extremely proud of how much I have grown from this coding experience. I chose a language that I was not familiar with, and was able to create a program that satisfied the requirements. I feel that I could have done better with making my code more testable from the get-go. However, I will take this as a learning experience and try to improve on my coding skills going forward. All things considered, I am very happy with the final product.

Thank you Zendesk for this opportunity, I thoroughly enjoyed this experience!
