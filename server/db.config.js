const dbName='food-ordering'
const dbHost='localhost'
const dbPort=27017;
module.exports={
    // dbName,
    // dbHost,
    // dbPort,
    url:`mongodb://${dbHost}:${dbPort}/${dbName}`  // MongoDB connection string
}