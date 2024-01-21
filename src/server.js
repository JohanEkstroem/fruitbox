import express from 'express'
import fruitBoxes from './data.js'
const app = express()

app.get("/api/fruitbox/getAll", (req, res) => {
    res.json(fruitBoxes)
})

app.get("/api/fruitbox/getAllById/:id", (req, res) => {
    const filteredFruitboxes = fruitBoxes.filter(f => f.Id == req.params.id);
    res.json(filteredFruitboxes)
})

app.listen(8001, () => console.log("Server up and running"))