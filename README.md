**This project is undergoing a serious facelift.**

# React Webpack Express Isomorphic Boilerplate
It's fun, it's hip, it renders on the client and server!

For the record, I haven't yet tested this extensively, but it's working well with Node 4.2.1 on Mac OS X Yosemite.

## What's the point
Google can tell you what an isomorphic app is and why it's good. I built this because many boilerplates out there, though comprehensive and probably way better than this one, have more stuff in them than I need. With this, there are few files and few dependencies. You'll be up and running in quickly.

## Other technologies to note
+ [webpack-isomorphic-tools](https://www.npmjs.com/package/webpack-isomorphic-tools): Allows you to `require` images and use CSS modules on the server.
+ [Nodemon](https://github.com/remy/nodemon): Watch Node.js files for changes, then restart the server
+ [proxy-middleware](https://www.npmjs.com/package/proxy-middleware): Allows the Node.js server to redirect asset requests to webpack-dev-server during development.

## Directory breakdown
+ **/assets/**: Where static files go. This is what the Express server will use as its static path. There are three subdirectories: **/img/**, **/js/** and **/css/**. The latter two won't have anything in them during development because webpack-dev-server will hold the bundle in memory, and styles will be embedded into the HTML file by Webpack. **/img/** is where you place any images that will be part of your app. On production build, it will get a **/prod/** subdirectory that will contain properly hashed images used in production

+ **/server/**: Contains a **/dev/** subdirectory with main.js and server.js. Main is necessary for webpack-isomorphic-tools to run properly. It `require`s server.js, which fires up the Express server that renders the app into a Jade template. It also contains babel-register so that I don't have to compile by React components before they're rendered on the server. On production build, these two files will be compiled into ES5 via Babel and placed in a **/prod/** subdirectory. This is necessary because it's not smart to use babel-node in production.

+ **/src/**: The meat of your app. **/components/** contains all React components, **/scss/** contains CSS modules (written in Sass) that correspond to each component and index.js is the app entry point.

+ **/templates/**: Contains two Jade templates: dev.jade and prod.jade. The former has a link to the development bundle produced by webpack-dev-server. The latter has a link to the production bundle as well as the production stylesheet.

## Workflow
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev-no-watch` or `npm run dev-watch` (if you want Nodemon to watch your Node.js files for changes). This will fire up webpack-dev-server, which will produce a bundled script in memory. It will also start the Node.js server, which renders into dev.jade. You'll also notice that, once the command has run, there will be a webpack-assets.json file in the root directory. This is produced by webpack-isomorphic-tools to track where your various assets live.
3. Navigate to http://localhost:3000. You can edit your React components and CSS modules now and see them hot-reloaded in your browser.
4. Build for production: `npm run build`. This does a few things: cleans out various directories (from remnant production builds), produces a Webpack bundle in **/assets/js/**, produces a stylesheet in **/assets/css/**, compiles your Node.js files into **/server/prod/** so they can be run without babel-node and finally uses a Gulp task to add vendor prefixes to the produced stylesheet.

## Known bugs
+ Sometimes, even after you stop execution with `ctrl + C`, Nodemon still hogs port 3000. If this is an issue, you can kill all node processes on your machine with `pkill node`.

## License
MIT
