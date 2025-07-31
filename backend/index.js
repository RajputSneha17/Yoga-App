require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const route = require('./routes/UserRoute.js');
const cors = require('cors')
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'));

app.use(express.json());
app.use("/", route);
app.get("/", (req, res) => {
    res.send("Working!!!");
})

app.listen(port, () => {
    console.log(`port is running on http://localhost:${port}`);
})