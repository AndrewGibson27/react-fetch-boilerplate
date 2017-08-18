const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = env === 'development';
const port = process.env.PORT || 3000;
const isServer = typeof window === 'undefined';

module.exports = {
  env,
  port,
  isDev,
  isServer
};
