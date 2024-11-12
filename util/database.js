
import { MongoClient } from "mongodb";

const url = 'mongodb+srv://hanjoo:D6VrQJs9s2xvmVL9@cluster0.9giuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }