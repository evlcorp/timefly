module.exports = {
  stringifyErrorPayload: payload => JSON.stringify(payload),
  validateStrings: strings =>
    strings.reduce((acc, curr) =>
      curr.trim().length < 1 ? false : acc, true)
}
