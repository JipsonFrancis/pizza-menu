import express from 'express'
import mongoose from 'mongoose'
import item from './Model/Item'

const PORT = process.env.PORT || 5000

express().listen(PORT, () => console.log(`Server running on port ${PORT}`) )

mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


express().get("/api/items", async (request, response) => {
    try
    {
        const items = await item.find()
        response.json(items)
    }
    catch(error)
    {
        console.error(error)
        response.status(500).send("Server Error")
    }
})

