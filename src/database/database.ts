require("dotenv").config();
import mongoose from "mongoose";

export function connectToMongo(): mongoose.Connection {
  mongoose.connect(
    process.env.MONGO_CONNECT || 'mongodb://localhost:27017/admin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  mongoose.connection.on('connected', function() {
    console.log('Connected to MongoDB...');
  });

  mongoose.connection.on('error', function(err){
    console.error(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose default connection is disconnected due to application termination");
      process.exit(0);
    });
  });

  return mongoose.connection;
};
