// Import the necessary libraries
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses")
require("dotenv").config()

// Set up AWS credentials and SES configuration
const credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // region: process.env.AWS_REGION, // Replace with your desired AWS region
}
const sesClient = new SESClient({ region: credentials.region, credentials })

// Set up the email parameters
const params = {
  Destination: {
    ToAddresses: ["uigla.tech@gmail.com"], // Replace with the recipient email address
  },
  Message: {
    Body: {
      Text: {
        Data: "SIN contenido", // Replace with the email body content
      },
    },
    Subject: {
      Data: "SIN subject", // Replace with the email subject
    },
  },
  Source: "uigla.tech@gmail.com", // Replace with the sender email address (must be verified in AWS SES)
}

// /* MANUAL */
// sendEmailSES("Hey!", "There!")


// Send the email
async function sendEmailSES_Encima(_subject, _content) {
  /* SUBJECT */
  params.Message.Subject.Data = _subject + _content.symbol
  /* CONTENT */
  const text = `Precio esperado: ${_content.lowTarget}\nPrecio actual: ${_content.price}\nSymbol: ${_content.symbol}\nCoingecko: ${_content.coingecko}\nvolume6h: ${_content.volume6h}\nvolume24h: ${_content.volume24h}`;

  params.Message.Body.Text.Data = text
  

  try {
    const command = new SendEmailCommand(params)
    const response = await sesClient.send(command)
    console.log("Email sent successfully!")
    console.log("Message ID:", response.MessageId)
  } catch (error) {
    console.log("Error:", error)
  }
}

module.exports = { sendEmailSES_Encima }
