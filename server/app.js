const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
dotenv.config({ path: "./config.env" })

//connect database
mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
mongoose.connection.on("connected", () => {
    console.log("Connected to DB")
})
mongoose.connection.on("error", (err) => {
    console.log("Error connect to DB: ", err)
})


//router
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/category', require("./router/category"))
app.use('/api/expense', require("./router/expense"))

app.get('/', (req, res) => {
    res.send("Welcome to Expense-Tracker App")
})


//listening PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)

})