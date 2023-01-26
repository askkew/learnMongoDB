const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express();

let db

connectToDb((err) => {
    if (!err) {
        app.listen(5000, () => {
            console.log(`Example app listening on port 5000!`);
        })
        db = getDb()
    }
})

app.get('/details', (req, res) => {

    let detailItems = []
    db.collection('details')
        .find()
        .sort({ name: 1})
        .forEach(detailItem => detailItems.push(detailItem))
        .then(() => {
            res.status(200).json(detailItems)
            console.log(detailItems)
        })
        .catch(() => {
            res.status(500).json({error: 'could not fetch documents'})
        })
})