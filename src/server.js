import express from 'express'
import fruitBoxes from './data.js'
import { uuid } from 'uuidv4'
const app = express()

app.get("/api/fruitbox/getAll", (req, res) => {
    res.json(fruitBoxes)
})

app.get("/api/fruitbox/getAllById/:id", (req, res) => {
    const filteredFruitboxes = fruitBoxes.filter(f => f.Id == req.params.id);
    res.json(filteredFruitboxes)
})

app.post("api/fruitbox/addFruitBox", (req, res) => {
    fruitBoxes.push({ Id: uuid, Name: req.body.name, Articles: req.body.articles })
    res.json(req.body).status(201)
})

app.listen(8001, () => console.log("Server up and running"))