require('dotenv').config()

const {
  PORT,
  MONGODB_URI,
  NODE_ENV,
  JWKS_URI,
  AUDIENCE,
  ISSUER
} = process.env

module.exports = {
  port: PORT || 5000,
  mongodbUri: MONGODB_URI || '',
  nodeEnv: NODE_ENV || 'development',
  jwksUri: JWKS_URI || '',
  audience: AUDIENCE || '',
  issuer: ISSUER || ''
}
