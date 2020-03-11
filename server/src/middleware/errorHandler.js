module.exports = (err, req, res, next) => {
  if (err) {
    try {
      const { code, message } = JSON.parse(err.message)

      if (code && message) {
        return res.status(code).json({
          success: false,
          message: message
        })
      }

      return res.status(500).json({
        success: false,
        message: 'An error occured'
      })
    } catch {
      return next()
    }
  }

  return next()
}
