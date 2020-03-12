const Dashboard = require('../models/Dashboard')

module.exports = async (req, res, next) => {
  const doesExist = await Dashboard.exists({ userEmail: req.user.email })

  if (!doesExist) {
    const newDashboard = new Dashboard({ userEmail: req.user.email })

    await newDashboard.save()
  }

  next()
}
