require("dotenv").config();

// Now you can access your environment variables
const apiKey = process.env.API_KEY;

async function getPriceByPool(alert) {
  try {
    const { chain, pool } = alert;
    const apiUrlPoolPrice = `https://open-api.dextools.io/free/v2/pool/${chain}/${pool}/price`;

    // Set up headers
    const headers = new Headers();
    headers.append("X-BLOBR-KEY", apiKey);

    // Make the API request using fetch
    const response = await fetch(apiUrlPoolPrice, {
      method: "GET",
      headers: headers,
    });

    /* TODO necesaio eliminaa codigo? */
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    
    const data = await response.json();
    
    // Handle the response data
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error at getPriceByPool:", error.message);
    throw error; // Propagate the error to the caller
  }
}

module.exports = { getPriceByPool };
