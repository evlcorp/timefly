const { stringifyErrorPayload } = require('../utils')

module.exports = rules => (req, res, next) => {
  const invalidFields = []

  const isValid = Object.keys(rules).reduce((acc, currKey) => {
    // eslint-disable-next-line valid-typeof
    if (typeof (req.body[currKey]) !== rules[currKey]) {
      invalidFields.push(currKey)

      return false
    }

    return acc
  }, true)

  if (!isValid) {
    throw new Error(stringifyErrorPayload({
      code: 400,
      message: `Invalid fields provided: [${invalidFields.join(', ')}]`
    }))
  }

  next()
}
