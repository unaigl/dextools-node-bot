/* --->     node lib/coinPrice/getCoinPrice.js */

const fetch = require("node-fetch")
require("dotenv").config()


async function getCoinPrice(_id) {

  let coinPrice

  const vs_currency = 'usd'
  const days = 91

  /* coingecko */
  try {
    const _rawCoinPrice = await fetch(
      `https://api.coingecko.com/api/v3/coins/${_id}/market_chart?vs_currency=${vs_currency}&days=${days}`
    )
    const _coinPrice = await _rawCoinPrice.json()
    console.log('prices',_coinPrice.prices[91])
    console.log('market_caps',_coinPrice.market_caps[91])
    console.log('total_volumes',_coinPrice.total_volumes[91])
    // const rawCoinPrice = _coinPrice[`${_coinName}`].usd
    // coinPrice = Number(rawCoinPrice.toFixed(2))
  } catch (error) {
    console.error("Error fetching COIN price at COINGECKO: ", error.message)
  }



  return coinPrice
}

const _coinName = 'Woonkly Power'
const _coinSymbol = 'woop'
const _id = 'woonkly-power'
getCoinPrice(_id).then((result)=>console.log('result',result))


module.exports = { getCoinPrice }
