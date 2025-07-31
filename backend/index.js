require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (res, req) => {
    res.send("Working!!!");
})

app.listen(port, () => {
    console.log(`port is running on http://localhost:${port}`);
})