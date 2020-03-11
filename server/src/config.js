require('dotenv').config()

const {
  PORT,
  MONGODB_URI,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET,
  SESSION_SECRET,
  AUTH0_CALLBACK_URL,
  NODE_ENV,
  JWKS_URI,
  AUDIENCE,
  ISSUER
} = process.env

module.exports = {
  port: PORT || 5000,
  mongodbURI: MONGODB_URI || '',
  clientID: AUTH0_CLIENT_ID || '',
  domain: AUTH0_DOMAIN || '',
  clientSecret: AUTH0_CLIENT_SECRET || '',
  sessionSecret: SESSION_SECRET || '',
  callbackURL: AUTH0_CALLBACK_URL || 'http://localhost:5000/callback',
  nodeEnv: NODE_ENV || 'development',
  jwksURI: JWKS_URI || '',
  audience: AUDIENCE || '',
  issuer: ISSUER || ''
}
