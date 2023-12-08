const { getPriceByPool } = require("./dextools_API/getPriceByPool.js");
// const { alerts } = require("../data/alerts.js");
// const { deleteRepeted } = require("./helpers/deleteRepeted.js");

// const fs = require("fs");

// const filePath = "C:/Users/uigla/Desktop/dextools-node-bot/src/data/errors/errors.json";

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllPrices(alerts) {
  try {
    const getPriceByPoolAsync = async (alert) => {
      const data = await getPriceByPool(alert);

      const allData = { ...alert._doc, ...data.data }; // Simplified object merging
      /* not at serverless function */
      // if(data.errorCode) rewriteJson(allData)

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

/* helper */
// function rewriteJson(alert,data) {
//   const jsonData = readJSON(filePath);

//   jsonData.push(alert)

//   /* eliminamos los tokens repetidos */
//   const jsonDataNoRepeted = deleteRepeted(jsonData)

//   writeJSON(jsonDataNoRepeted);

// }

// function readJSON() {
//   try {
//     const jsonData = fs.readFileSync(filePath, "utf8");
//     return JSON.parse(jsonData);
//   } catch (error) {
//     console.error("Error reading JSON file:", error);
//     throw error;
//   }
// }

// function writeJSON(jsonData) {
//   try {
//     const jsonString = JSON.stringify(jsonData, null, 2);
//     fs.writeFileSync(filePath, jsonString, "utf8");
//   } catch (error) {
//     console.error("Error writing JSON file:", error);
//     throw error;
//   }
// }

