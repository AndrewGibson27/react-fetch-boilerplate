# React Webpack Express Isomorphic Boilerplate
It's fun, it's hip, it renders on the client and server!

## What's the point
Google can tell you what isomorphic apps are and why they're good. I built this because many of the boilerplates out there, though comprehensive and generally awesome, have more stuff in them than I need. This is bare bones. You'll be up and running quickly.

## Features
+ File watching via [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) and [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
+ Routing with [react-router](https://github.com/ReactTraining/react-router/tree/v3/docs) 3.x
+ [CSS modules](https://github.com/css-modules/css-modules)
+ [Autoprefixer](https://github.com/postcss/autoprefixer)
+ All the ES2015 goodness you could imagine via [Babel](https://babeljs.io/)
+ No code that's compiled at runtime.

## Structure
+ `client/`: Contains client-only code. Right now, that's just a Webpack entry point.
+ `public/`: What Express uses as its static directory.
+ `server/src/`: Contains the Node.js logic, including isomorphic rendering with react-router. The code here gets compiled into `server/dist/`, which is ignored from version control.
+ `shared/`: Files relevant to both the client and server. This is includes React components, as well as images, JSON and SCSS.
+ `views/`: [Pug](https://pugjs.org/api/getting-started.html) templates.
+ `webpack/`: The various Webpack configurations. Explained in more detail below.

## Commands
+ `npm run clean`: Deletes files created during the production build. These files are `.gitignore`d.
+ `npm run routes`: Using **webpack/config.server.js**, this command bundles **shared/routes.js** into **server/dist/routes.js**. The reason is so that Node.js doesn't have to compile the React components at runtime. This process also allows CSS modules to work during server-side rendering.
+ `npm run compile`: Using [babel-cli](https://babeljs.io/docs/usage/cli/), this command compiles **server/src/server.js** into **server/dist/server.js**. This is do Node.js doesn't have to do compilation at runtime.
+ `npm run hot`: Fires up the development server so that our Webpack-built bundle rebuilds on change. This command uses **webpack/config.dev.js**.
+ `npm run dev`: Put the app in development mode.
+ `npm run webpack`: The Webpack production build. It uses **webpack/config.prod.js**.
+ `npm run build`: The full production build.
+ `npm start`: Run the production Node.js server.

## Notes
+ In development, you'll notice the server-rendered markup is not styled. That's because the stylesheet is only built in production, and appending `<style>` tags requires JavaScript.
+ On `npm run routes`, you'll notice images, stylesheets and client scripts get built into `server/dist`. That's just a side effect of having to use Webpack to bundle the routes for server-side rendering. They're all `.gitignore`d.
+ In `shared/utils.js`, make sure to change the second value in the `location` ternary to your production domain.

## Inspiration
+ [react-universal-web-apps](https://github.com/zen-js-code/react-universal-web-apps)
+ [book-shelf](https://github.com/jarsbe/book-shelf)
+ [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)

## What's next
+ Upgrade to [react-router](https://reacttraining.com/react-router/)@4.x
+ Integrate [react-redux](https://github.com/reactjs/react-redux)
+ Add unit tests

## License
MIT

## Credits
Wonderful walrus placeholder image courtesy of [Jay Ruzesky](https://unsplash.com/@wolsenburg) on [Unsplash It](https://unsplash.it/images).
