const { getPrice } = require("./getPrice");
const { alerts } = require("./data/alerts");

async function getAllPrices() {
  try {
    const getPriceAsync = async (alert) => {
      const data = await getPrice(alert);

      const allData = { ...alert, ...data.data }; // Simplified object merging
      return allData;
    };

    const alertPromises = alerts.map(getPriceAsync);
    const allData = await Promise.all(alertPromises);

    return allData;
  } catch (error) {
    console.error("Error in getAllPrices:", error);
    throw error; // Propagate the error to the caller
  }
}

module.exports = { getAllPrices };
