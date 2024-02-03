import {MongoClient} from "mongodb"

const itemSchema = new MongoClient.Schema({
    name: String,
    description: String
})

export default MongoClient.model("Item", itemSchema)