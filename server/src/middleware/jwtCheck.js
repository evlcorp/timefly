const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const { jwksUri, audience, issuer } = require('../config')

module.exports = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri
  }),
  aud: audience,
  issuer,
  algorithms: ['RS256']
})
