const { getPriceByPool } = require("../dextools_API/getPriceByPool");
const { alerts } = require("../data/alerts");

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllPrices() {
  try {
    const getPriceByPoolAsync = async (alert) => {
      const data = await getPriceByPool(alert);

      const allData = { ...alert, ...data.data }; // Simplified object merging
      return allData;
    };

    const alertPromises = [];

    /* IMPORTANTE!! USAR sleep YA QUE DEXTOOLS.IO en la version free no permite hacer llamadas en cadena */
    for (const alert of alerts) {
      const result = await getPriceByPoolAsync(alert);
      alertPromises.push(result);
      await sleep(3000); // Introduce a 3-second delay
    }

    return alertPromises;
  } catch (error) {
    console.error("Error in getAllPrices:", error);
    throw error; // Propagate the error to the caller
  }
}

module.exports = { getAllPrices };


// const { getPriceByPool } = require("../dextools_API/getPriceByPool");
// const { alerts } = require("../data/alerts");

// async function getAllPrices() {
//   try {
//     const getPriceByPoolAsync = async (alert) => {
//       const data = await getPriceByPool(alert);


//       const allData = { ...alert, ...data.data }; // Simplified object merging
//       return allData;
//     };

//     const alertPromises = alerts.map(getPriceByPoolAsync);
//     const allData = await Promise.all(alertPromises);

//     return allData;
//   } catch (error) {
//     console.error("Error in getAllPrices:", error);
//     throw error; // Propagate the error to the caller
//   }
// }

// module.exports = { getAllPrices };
