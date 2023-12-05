const { getPriceByPool } = require("../dextools_API/getPriceByPool");
const { alerts } = require("../data/alerts");

const fs = require("fs");

const filePath = "C:/Users/uigla/Desktop/dextools-node-bot/data/errors/errors.json";

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllPrices() {
  try {
    const getPriceByPoolAsync = async (alert) => {
      const data = await getPriceByPool(alert);

      
      const allData = { ...alert, ...data.data }; // Simplified object merging
    if(data.errorCode) rewriteJson(allData)

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
function rewriteJson(alert,data) {
  const jsonData = readJSON(filePath);

  jsonData.push(alert)
  // const allData = [ alert, jsonData ];


  /* TODO eliminar los repetidos, en base al address del pool */
  /* TODO eliminar los repetidos, en base al address del pool */
  /* TODO eliminar los repetidos, en base al address del pool */
  /* TODO eliminar los repetidos, en base al address del pool */
  /* TODO eliminar los repetidos, en base al address del pool */
  /* TODO eliminar los repetidos, en base al address del pool */
  // const allDataCleaned = allData.filter((obj)=>{

  // })

  writeJSON(jsonData);

}

function readJSON() {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}

function writeJSON(jsonData) {
  try {
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, jsonString, "utf8");
  } catch (error) {
    console.error("Error writing JSON file:", error);
    throw error;
  }
}

/*  */
/*  */
/*  */

// const { getPriceByPool } = require("../dextools_API/getPriceByPool");
// const { alerts } = require("../data/alerts");


// async function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }



// async function getAllPrices() {
//   try {
//     const jsonData = readJSON(filePath);

//     const getPriceByPoolAsync = async (alert) => {
//       try {
//         const data = await getPriceByPool(alert);

//         if (data.error) {
//           console.error("Error in getPriceByPoolAsync:", data.error);
//           return null;
//         }

//         const allData = { ...alert, ...data.data };
//         jsonData.newData = allData;

//         // Introduce a 3-second delay
//         await sleep(3000);

//         writeJSON(filePath, jsonData);

//         console.log("allData", data);

//         return allData;
//       } catch (error) {
//         console.error("Error in getPriceByPoolAsync:", error);
//         throw error;
//       }
//     };

//     const alertPromises = [];

//     for (const alert of alerts) {
//       const result = await getPriceByPoolAsync(alert);
//       alertPromises.push(result);
//     }

//     return alertPromises;
//   } catch (error) {
//     console.error("Error in getAllPrices:", error);
//     throw error;
//   }
// }

// // Run the script
// getAllPrices()
//   .then(results => console.log("All prices fetched:", results))
//   .catch(error => console.error("Script execution error:", error));

/*  */
/*  */
/*  */
/*  */
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
