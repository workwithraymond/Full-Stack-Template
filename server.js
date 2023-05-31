//step two (Require dependencies)
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8200


//Declare variables 
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

//Connect to MongoDB 
MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

    
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port`)
})

