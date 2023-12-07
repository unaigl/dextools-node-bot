const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
// const { Router } = require("express")
// const Coins = require("./src/schema/coins.schema.js")
const path = require("path")
const dotenv = require("dotenv")
const routes = require("./src/routes/routes.js")
dotenv.config()

const config = {
  /* dev */
  MONGOPORT: process.env.MONGOPORT || 27017,
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || "3000",
  /* prod */
  USER: process.env.USER || "",
  PASSWORD: process.env.PASSWORD || "",
  CLUSTER: process.env.CLUSTER || "",
  DATABASE: process.env.DATABASE || "coins",
}

const app = express()
console.log('config.PORT,',config.PORT)
app.set("port", config.PORT)
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) // app.use(express.static("public"))
app.use("/static", express.static(path.join(__dirname, "public")))

/*  */
/* DB */ 
let db;  // Declare db variable outside the connectDB function

async function connectDB() {
  try {
    mongoose.Promise = global.Promise
    db = await mongoose.connect(
      `mongodb+srv://${config.USER}:${config.PASSWORD}@${config.CLUSTER}/${config.DATABASE}`
    )
    console.log("Database is connected to: ", db.connection.name)
  } catch (error) {
    console.error(error)
  }
}

connectDB();

app.use(routes)


// Handle graceful shutdown
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});



app.use(routes)
/*  */

app.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`)
})
