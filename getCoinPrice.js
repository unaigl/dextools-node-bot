/* --->     node lib/coinPrice/getCoinPrice.js */

const fetch = require("node-fetch")
require("dotenv").config()

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

async function getCoinPrice(_coinName, _coinSymbol,_id) {
  const outputType = "usd"

  let coinPrice

  /* coingecko */
  try {
    const _rawCoinPrice = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${_coinName}&vs_currencies=${outputType}`
    )
    const _coinPrice = await _rawCoinPrice.json()
    console.log('_coinPrice',_coinPrice)
    // const rawCoinPrice = _coinPrice[`${_coinName}`].usd
    // coinPrice = Number(rawCoinPrice.toFixed(2))
  } catch (error) {
    console.error("Error fetching COIN price at COINGECKO: ", error.message)
  }


  // /* COINMARKETCAP */
  // if (true) {
  //   try {
  //     const _response = await fetch(
  //       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${_coinSymbol}`,
  //       {
  //         headers: {
  //           "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
  //         },
  //         json: true,
  //       }
  //     )
  //     const response = await _response.json()
  //     console.log('response',response.data.WOOP.quote)
  //     const _coinPrice = response.data[`${_coinSymbol}`].quote.USD.price
  //     coinPrice = Number(_coinPrice.toFixed(2))
  //   } catch (error) {
  //     console.error(
  //       "Error fetching COIN price AT COINMARKETCAP:",
  //       error.message
  //     )
  //   }

  // }

  return coinPrice
}

const _coinName = 'Woonkly Power'
const _coinSymbol = 'woop'
const _id = 'woonkly-power'
getCoinPrice(_coinName, _coinSymbol,_id).then((result)=>console.log('result',result))


module.exports = { getCoinPrice }
