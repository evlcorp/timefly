const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const { jwksURI: jwksUri, audience, issuer } = require('./config')

module.exports = {
  checkJwt: jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri
    }),

    audience,
    issuer,
    algorithm: ['RS256']
  })
}
