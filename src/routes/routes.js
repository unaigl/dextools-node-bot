const { Router } = require("express");
const Coins = require("../schema/coins.schema.js");
const { getAllPrices } = require("../utils/getAllPrices.js");
const { logResult } = require("../utils/helpers/logResult.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Coins.find();
    if (!data) res.status(302).json("no data");

    const result = await processData(data);

    res.send(html(result));
  } catch (error) {
    console.log(error);
  }
});

// router.get("/email", async (req, res) => {
//   try {
//     const data = await Coins.find();
//     if (!data) res.status(302).json("no data");

//     const result = await processData(data);

//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */
//     /* TODO if -> SES */

//     return res.json({});


//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;

/* HELPERS */

/* process data */
async function processData(data) {
  const allPrices = await getAllPrices(data);

  const result = allPrices.map((obj) => {
    return logResult(obj);
  });

  return result;
}

/* HTML */
function html(data) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Data Visualization</title>
        <style>
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>API Data Visualization</h1>
        <ul>
          ${data
            .map(
              (item, index) => `
            <li>
              ${index} - {
                <br>
                &nbsp;&nbsp;symbol: '${item.symbol}',<br>
                &nbsp;&nbsp;coingecko: '<a href="${
                  item.coingecko
                }" target="_blank">${item.coingecko}</a>',<br>
                &nbsp;&nbsp;buyPrice_USD: ${item.buyPrice_USD || 0},<br>
                &nbsp;&nbsp;reference_price: ${item.reference_price || 0},<br>
                &nbsp;&nbsp;price: ${item.price},<br>
                &nbsp;&nbsp;highTarget: ${item.highTarget},<br>
                &nbsp;&nbsp;lowTarget: ${item.lowTarget},<br>
                ${
                  item.volume6h
                    ? `&nbsp;&nbsp;volume6h: '${item.volume6h}',<br>`
                    : ""
                }
                ${
                  item.volume24h
                    ? `&nbsp;&nbsp;volume24h: '${item.volume24h}'<br>`
                    : ""
                }
              }
            </li>
          `
            )
            .join("")}
        </ul>
      </body>
      </html>
    `;
}
