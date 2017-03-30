const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = env === 'development';
const port = process.env.PORT || 3000;
const location = env === 'development' ? `http://localhost:${port}` : `http://localhost:${port}`;
const isServer = typeof window === 'undefined';

module.exports = {
  location,
  env,
  port,
  isDev,
  isServer
};
