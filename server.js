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
//middleware to add ejs. This generates html
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true})) //this parses urls
app.use(express.json())//this middleware parses the json, it helps us read the data that is comming back and forth
app.use(cors())

    
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port`)
})

