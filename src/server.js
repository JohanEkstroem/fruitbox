import express from 'express'
import fruitBoxes from './data.js'
const app = express()

app.get("/api/fruitbox/", (req, res) => {
    res.json(fruitBoxes)
})

app.listen(8001, () => console.log("Server up and running"))