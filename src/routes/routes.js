const { Router } = require("express")
const Coins = require("../schema/coins.schema.js")

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Coins.find()
    /* TODO */
    console.log("data", data)
    if (!data) res.status(302).json("no data")
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

router.get("/email", async (req, res) => {
  try {
    const data = await Coins.find()
    /* TODO */
    console.log(data)

    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
