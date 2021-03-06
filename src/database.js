require("dotenv").config();
const mongoose = require('mongoose');
const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
let database =  mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log('MongoDB connected...'))
.catch(err => console.log(err));

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });

  if (!database) {
    database = connection.db();
    await database.collection("events").insertMany([
      {
        id: 1,
        title: "Walmart Trip",
        description: "Salmon dinner and tacos for lunch next week",
        date: "2020-01-08T10:34:25+00:00",
        items: [
          {
            id: 1,
            name: "Salmon",
            expiration_date: "2020-01-28T10:34:25+00:00" 
          },
          {
            id: 2,
            name: "rice",
            expiration_date: "2021-01-18T10:34:25+00:00" 
          },
          {
            id: 3,
            name: "Ground Beef",
            expiration_date: "2020-03-18T10:34:25+00:00" 
          },
          {
            id: 4,
            name: "Taco Mix",
            expiration_date: "2022-01-18T10:34:25+00:00" 
          },
          {
            id: 5,
            name: "Shredded Cheese",
            expiration_date: "2020-02-18T10:34:25+00:00" 
          },
          {
            id: 6,
            name: "Taco Shells",
            expiration_date: "2021-01-18T10:34:25+00:00" 
          }
          
        ]
      },
      {
        id: 2,
        title: "HEB Trip",
        description: "Date Night Wednesday",
        date: "2020-01-12T10:34:25+00:00",
        items: [
          {
            id: 1,
            name: "Noodles",
            expiration_date: "2021-01-28T10:34:25+00:00" 
          },
          {
            id: 2,
            name: "Pasta Sauce",
            expiration_date: "2021-01-18T10:34:25+00:00" 
          },
          {
            id: 3,
            name: "Ground Beef",
            expiration_date: "2020-03-18T10:34:25+00:00" 
          },
          {
            id: 4,
            name: "Garlic Bread",
            expiration_date: "2020-02-18T10:34:25+00:00" 
          },
          {
            id: 5,
            name: "Parmesan Cheese",
            expiration_date: "2020-02-18T10:34:25+00:00" 
          },
          {
            id: 6,
            name: "Red Wine",
            expiration_date: "2030-01-18T10:34:25+00:00" 
          }
          
        ]
      },
    ]);
  }
  else{
    database = connection.db();
    await database.collection("events").insertMany([
      {
        id: 1,
        title: "Walmart Trip",
        description: "Salmon dinner and tacos for lunch next week",
        date: "2020-01-08T10:34:25+00:00",
        items: [
          {
            id: 1,
            name: "Salmon",
            expiration_date: "2020-01-28T10:34:25+00:00" 
          },
          {
            id: 2,
            name: "rice",
            expiration_date: "2021-01-18T10:34:25+00:00" 
          },
          {
            id: 3,
            name: "Ground Beef",
            expiration_date: "2020-03-18T10:34:25+00:00" 
          },
          {
            id: 4,
            name: "Taco Mix",
            expiration_date: "2022-01-18T10:34:25+00:00" 
          },
          {
            id: 5,
            name: "Shredded Cheese",
            expiration_date: "2020-02-18T10:34:25+00:00" 
          },
          {
            id: 6,
            name: "Taco Shells",
            expiration_date: "2021-01-18T10:34:25+00:00" 
          }
          
        ]
      }
    ])
  }
         
  return database;
}

module.exports = startDatabase;