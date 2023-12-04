const { getAllPrices } = require("./getAllPrices");
const { sendEmailSES_Debajo } = require("../aws_ses/sendEmailSES_Debajo");
const { sendEmailSES_Encima } = require("../aws_ses/sendEmailSES_Encima");
const { logResult } = require("../helpers/logResult");

const emailContentHigh = "MI BOT - Precio por ENCIMA de lo esperado - ";
const emailContentLow = "MI BOT - Precio por DEBAJO de lo esperado - ";

async function execute() {
  try {
    const allPrices = await getAllPrices();

    /* todo volumen del pool */
    /* todo volumen del pool */
    /* todo volumen del pool */
    /* todo volumen del pool */
    /* todo volumen del pool */

    allPrices.forEach(async (alert,i) => {
      const result = logResult(alert)
      console.log(i, " - ",result)

      if (alert.highTarget && alert.highTarget < alert.price)
        await sendEmailSES_Encima(emailContentHigh, result);

      if (alert.lowTarget && alert.lowTarget > alert.price) 
        await sendEmailSES_Debajo(emailContentLow, result);
    });
  } catch (error) {
    console.error("Error in execute:", error);
  }
}

execute();



/* 
EXAMPLE

 {
    chain: 'arbitrum',
    symbol: 'SPARTA',
    address: '0x11f98c7e42a367dab4f200d2fdc460fb445ce9a8',
    buyPrice_USD: '',
    highTarget: 0,
    lowTarget: 0,
    statusCode: 200,
    price: 0.45725778691681956,
    priceChain: 0.0002184554856285908,
    price5m: 0.45725778691681956,
    priceChain5m: 0.0002184554856285908,
    variation5m: 0,
    variationChain5m: 0,
    price6h: 0.3943563914122958,
    priceChain6h: 0.00018851733524816134,
    variation6h: 15.950393317896294,
    variationChain6h: 15.880847424996404,
    price24h: 0.4181334584566897,
    priceChain24h: 0.0002051075118933566,
    variation24h: 9.356899733529067,
    variationChain24h: 6.507793699030562
  }
*/
