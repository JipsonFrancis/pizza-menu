// import app from 'express'
// import mongoose from 'mongoose'
// import item from './Model/Item.js'

// const PORT = process.env.PORT || 5000

// xpress().listen(PORT, () => console.log(`Server running on port ${PORT}`) )

// mongoose.connect("mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })


// xpress().get("/api/items", async (request, response) => {
//     try
//     {
//         const items = await item.find()
//         response.json(items)
//     }
//     catch(error)
//     {
//         console.error(error)
//         response.status(500).send("Server Error")
//     }
// })



import xpress from 'express'
import {MongoClient} from "mongodb"
import cors from "cors"
// import item from './Model/Item.js'
const app = xpress()

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Enable credentials (cookies, authorization headers, etc.)
  };


app.use(cors(corsOptions))

// app.options('*', cors(corsOptions));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`) )



app.get("/api/item", async (request, response) => {
    const uri = `mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority`

    const session = new MongoClient(uri)
    try
    {
        const result = await session.db(`sample_airbnb`).collection(`listingsAndReviews`).findOne({name: "Ribeira Charming Duplex"})
        response.json(result)
        console.log(result)

    }
    catch(error)
    {
        console.error(error)
        response.status(500).send("Server Error")
    }finally
    {
        await session.close()
    }
})

// async function main ()
// {
//     const uri = `mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority`

//     const session = new MongoClient(uri)

//     try
//     {
//         await session.connect()

//         // await createListing(session, {
//         //     name: "Lovely Loft",
//         //     summary: "A charming loft in Paris",
//         //     bedrooms: 1,
//         //     bathrooms: 1
//         // })

//         // await createManyListings(session, [{
//         //     name: "Infinite Views",
//         //     summary: "Modern home with infinite views from the infinity pool",
//         //     property_type: "House",
//         //     bedrooms: 5,
//         //     bathrooms: 4.5,
//         //     beds: 5
//         // },
//         // {
//         //     name: "Private room in London",
//         //     property_type: "Apartment",
//         //     bedrooms: 1,
//         //     bathroom: 1
//         // },
//         // {
//         //     name: "Beautiful Beach House",
//         //     summary: "Enjoy relaxed beach living in this house with a private beach",
//         //     bedrooms: 4,
//         //     bathrooms: 2.5,
//         //     beds: 7,
//         //     last_review: new Date()
//         // }])

//         await readOneListing(session, { name: "Beauticls Beach House" })

//     }catch(e)
//     {
//         console.error(e)
//     }finally
//     {
//         await session.close()
//     }
// }









// async function main ()
// {
//     const uri = `mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority`

//     const session = new MongoClient(uri)

//     try
//     {
//         await session.connect()

//         // await createListing(session, {
//         //     name: "Lovely Loft",
//         //     summary: "A charming loft in Paris",
//         //     bedrooms: 1,
//         //     bathrooms: 1
//         // })

//         // await createManyListings(session, [{
//         //     name: "Infinite Views",
//         //     summary: "Modern home with infinite views from the infinity pool",
//         //     property_type: "House",
//         //     bedrooms: 5,
//         //     bathrooms: 4.5,
//         //     beds: 5
//         // },
//         // {
//         //     name: "Private room in London",
//         //     property_type: "Apartment",
//         //     bedrooms: 1,
//         //     bathroom: 1
//         // },
//         // {
//         //     name: "Beautiful Beach House",
//         //     summary: "Enjoy relaxed beach living in this house with a private beach",
//         //     bedrooms: 4,
//         //     bathrooms: 2.5,
//         //     beds: 7,
//         //     last_review: new Date()
//         // }])

//         await readOneListing(session, { name: "Beauticls Beach House" })

//     }catch(e)
//     {
//         console.error(e)
//     }finally
//     {
//         await session.close()
//     }
// }


// async function listCollections(session)
// {
//     const {databases} = await session.db().admin().listDatabases()
//     console.log(databases)
//     databases.forEach((db) => console.log(db.name))
// }

const readOneListing = async (session, listing = {}) => 
{
    const result = await session.db(`sample_airbnb`).collection(`listingsAndReviews`).findOne(listing)

    console.log(result)
}

// const createManyListings = async (session, newListings) => 
// {
//     const result = await session.db(`sample_airbnb`).collection(`listingsAndReviews`).insertMany(newListings)
//     console.log(result)
// }


// const createListing = async (session, newListing) => 
// {
//     const result = await session.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing)
//     console.log(result)
// }

// main().catch(console.error)