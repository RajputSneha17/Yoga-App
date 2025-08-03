require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const route = require("./routes/UserRoute.js");
const router = require("./routes/SessionRoute.js");
const cors = require("cors");
app.use(cors());

const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/10 * * * *', async () => { 
  try {
    await axios.get('https://yoga-app-tm7n.onrender.com/'); 
    console.log('server start again');
  } catch (error) {
    console.error('Error:', error.message);
  }
});

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected!"));

app.use(express.json());
app.use("/user", route);
app.use("/session", router);
app.get("/", (req, res) => {
  res.send("Working!!!");
});

app.listen(port, () => {
  console.log(`port is running on http://localhost:${port}`);
});
