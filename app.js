const express = require("express")
const dotenv = require('dotenv')

// load env config
dotenv.config({ path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 3000

// port to listen to 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))