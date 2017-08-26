import mongoose from 'mongoose';

import { dbHost } from './config';

export default function initDb(callback) {
  mongoose.Promise = global.Promise;

  const dPromise = mongoose.connect(dbHost, {
    useMongoClient: true,
  });

  dPromise.then((db) => {
    callback();
  });
}
