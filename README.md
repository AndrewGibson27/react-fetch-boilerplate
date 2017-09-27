# React Fetch Boilerplate
## Why
If you're application needs routing and data fetching but neither isomorphism nor Redux.

## What's inside
This boilerplate is built around two main libraries:
+ [react-refetch](https://github.com/heroku/react-refetch), which offers a simpler data-handling pattern than Redux and is designed for applications "mostly fetching and rendering read-only data from a server."
+ [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)@4.x

It also uses MongoDB models and [styled-components](https://github.com/styled-components/styled-components), but those could be swapped with something else fairly easily.

The sample application is a ridiculously simple news home page with a hideous grid system.

## Getting started
+ Clone the repository
+ `yarn` or `npm install`
+ Install MongoDB. Here are [instructions](https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/) for a Mac.
+ Create a `.env` file according to what's in `env.sample` (right now, it's just the local database host)
+ Run MongoDB. I run the following commands in two separate Terminal tabs: `mongod` and `mongo`
+ `yarn (npm) start`

The database is (obviously) empty at first, so you'll need to either add some entries from the command line or POST to the API endpoints.

## Other commands
+ `yarn (npm) run build`: Build for production
+ `yarn (npm) run start:prod`: Start the Node server in production
+ `yarn (npm) run clean`: Delete compiled files

## What's next
+ Add `Dockerfile`
+ Add database dump for easy DB initialization
+ Add proper loading indicators
