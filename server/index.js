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

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server" });
});

app.get("/insert", (req, res) => {
    var detailModel = new DetailModel()
    detailModel.name = "Name test" //passed value for name
    detailModel.description = "type test" //passed value for description
    detailModel.quantity = "10" //passed value for quantity

    detailModel.save((err,data) => {
        if (err) {
            console.log(err)
        }else {
            res.status(200).send({"MSG":"Inserted to DB"})
        }
    })
})

app.get('/read', (req, res) => {
    DetailModel.find((err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
})

app.get("/update", (req, res) => {
    DetailModel.findByIdAndUpdate(req.query.id, {name: req.query.name}, (err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
})

app.get("/delete", (req, res) => {
    DetailModel.findByIdAndDelete(req.query.id, (err, data) => {
        if(err) {
            return res.status(500).send(err)
        }else{
            return res.status(200).send(data)
        }
    })
})