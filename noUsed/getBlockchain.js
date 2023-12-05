require('dotenv').config();

// Now you can access your environment variables
const apiKey = process.env.API_KEY;

getPrice({chain:'solana',address:'4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6'})

async function getPrice(alert) {

  let response;
  
  
  const apiUrlPrice = `https://api-dev.dextools.io/v2/blockchain?sort=bsc&order=desc`;
  
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
    console.log('data',data)
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.message);
  });

  return response
}

module.exports= {getPrice}