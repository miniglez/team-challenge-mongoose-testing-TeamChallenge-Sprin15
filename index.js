const express = require("express");
const router = require("./routes/posts.js")
const { getTime } = require("./middlewares/middleware.js")
const app = express();
const PORT = 8080;

const dbConnected = require("./config/config.js")

app.use(express.json())

app.use("/", getTime,  router)

dbConnected()

app.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`)
})

module.exports = app;