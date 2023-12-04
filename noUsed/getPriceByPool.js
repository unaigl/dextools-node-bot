require('dotenv').config();

// Now you can access your environment variables
const apiKey = process.env.API_KEY;

/* var */
const chain = 'polygon';
const address = '0x0c087f8d6a1f14f71bb7cc7e1b061ca297af7555';
const pool = '0x35f8b497e201a2c7ae641d386162b10f772b65db';
// const chain = 'arbitrum';
// const address = '0x11f98c7e42a367dab4f200d2fdc460fb445ce9a8';

const apiUrlPrice = `https://open-api.dextools.io/free/v2/token/${chain}/${address}/price`;
const apiUrlPoolPrice = `https://open-api.dextools.io/free/v2/pool/${chain}/${pool}/price`;


// Set up headers
const headers = new Headers();
headers.append('X-BLOBR-KEY', apiKey);

// // Make the API request using fetch
// fetch(apiUrlPrice, {
//   method: 'GET',
//   headers: headers,
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the response data
//     console.log('API Response:', data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Error:', error.message);
//   });

  // Make the API request using fetch
fetch(apiUrlPoolPrice, {
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
      console.log('POOL API Response:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error.message);
    });
  