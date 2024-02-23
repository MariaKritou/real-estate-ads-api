# real-estate-ads-api

## Overview

This Node.js (used with Typescript for type safety) application is designed to manage real estate properties' ads, allowing users to view and create properties. It leverages technologies such as Express for the server framework, MongoDB for data storage, and Node-Cache for caching the autocomplete results.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 16.x or higher recommended)
- npm (comes with Node.js)
  
## Installation

To set up the project locally, follow these steps:

- Clone the project from the main branch: https://github.com/MariaKritou/real-estate-ads-api.git
- npm install
- Create an .env file (or rename the env.example) at the root of the project and paste the mongo uri : MONGO_URI=mongodb+srv://publicUser:fTc8bvKBSw5wCCnd@real-estate-ads.ig9c6q7.mongodb.net/?retryWrites=true&w=majority
- npm start (localhost:3000 this is used from the API_URL in the frontend as well)

## General Information

- I have opened the network access of the database to public and created a new user for you to use (already included in the uri above)
- If you face any issues with connecting to the db you can contact me 
- I wanted to create unit tests but unfortunately due to my schedule and time limitation I could not continue, I created a new branch called "testing" in which I will continue testing the application, you can check it out-it will propably have a lot of failed tests, the main branch will remain unchanged.

:)
