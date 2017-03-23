// https://github.com/zen-js-code/react-universal-web-apps/blob/simple%2Bssr/app/infra/route-manager.js
import fs from 'fs';
import path from 'path';
import express from 'express';

export default class APIHandler {
  constructor() {
    this.router = this.buildRouter();
  }

  buildRouter() {
    const router = express.Router();

    router.use((req, res, next) => {
      if (req.url.substr(-1) == '/' && req.url.length > 1) {
        res.redirect(301, req.url.slice(0, -1));
      } else {
        next();
      }
    });

    return router;
  }

  shareRouter() {
    return this.router;
  }

  createAPICalls() {
    const self = this;

    this.router.route('/list')
      .get(function(req, res){
        self.retrieveListItems((err, data) => {
          if (!err) {
            res.json(JSON.parse(data));
          } else {
            res.status(500).send();
          }
        });
      });
  }

  retrieveListItems(callback) {
    const filePath = path.join(__dirname, '..', '..', 'shared', 'json', 'listItems.json');
    fs.readFile(filePath, 'utf-8', callback);
  }
}
