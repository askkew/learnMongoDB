const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const DetailModel = require("./models/details.js");
const detailModel = require("./models/details.js");

const app = express();

const PORT = 5000

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin:bnr341999@cluster0.mvgqlfd.mongodb.net/practice?retryWrites=true&w=majority"

mongoose
    .connect(uri)
    .then(() => {
        console.info("Connected to the DB");
    })
    .catch((e) => {
        console.log("Error:", e);
    });

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

app.post('/insert', (req, res) => {
    var detailModel = new DetailModel()         //create new model for new data entry
    detailModel.name = req.body.name                        //assign name to detailmodel from data entry
    detailModel.description = req.body.description
    detailModel.quantity = req.body.quantity

    detailModel.save((err,data) => {                    //save new model to database
        if (err) {
            console.log(err)
        }else {
            res.status(200).send({"MSG":"Inserted to DB"})
        }
    })
});

app.get('/read', (req, res) => {
    DetailModel.find((err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
})

app.post('/delete', (req, res) => {
    DetailModel.findByIdAndDelete(req.body.ID, (err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
});

app.put("/update", (req, res) => {
    DetailModel.findOneAndUpdate({ _id: req.query.id }, req.body, {new: true}, (err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
})