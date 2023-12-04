require('dotenv').config();

// Now you can access your environment variables
const apiKey = process.env.API_KEY;


async function getPrice(alert) {

  let response;
  
  /* var */
  const chain = alert.chain;
  const address = alert.address;
  
  const apiUrlPrice = `https://open-api.dextools.io/free/v2/token/${chain}/${address}/price`;
  
  // Set up headers
  const headers = new Headers();
  headers.append('X-BLOBR-KEY', apiKey);
  
  // Make the API request using fetch
  await fetch(apiUrlPrice, {
    method: 'GET',
    headers: headers,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data
    response =data
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.message);
  });

  return response
}

module.exports= {getPrice}