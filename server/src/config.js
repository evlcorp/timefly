require('dotenv').config()

const {
  PORT,
  GMAIL_USERNAME,
  GMAIL_PASSWORD,
  DESTINATION_EMAIL
} = process.env

module.exports = {
  port: PORT || 5000,
  gmailUsername: GMAIL_USERNAME || '',
  gmailPassword: GMAIL_PASSWORD || '',
  destinationEmail: DESTINATION_EMAIL || ''
}
