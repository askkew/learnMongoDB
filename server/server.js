// const express = require('express')
// const { connectToDb, getDb } = require('./db')
// const mongoose = require('mongoose')

// const app = express();

// let db

// connectToDb((err) => {
//     if (!err) {
//         app.listen(5000, () => {
//             console.log(`Example app listening on port 5000!`);
//         })
//         db = getDb()
//     }
// })

// // const uri =

// // mongoose
// //     .connect(uri)
// //     .then(() => {
// //         console.info("Connected to DB!");
// //     })
// //     .catch((e) => {
// //         console.log('Error:', e);
// //     });

// app.get('/details', (req, res) => {

//     let detailItems = []
//     db.collection('details')
//         .find()
//         .sort({ name: 1})
//         .forEach(detailItem => detailItems.push(detailItem))
//         .then(() => {
//             res.status(200).json(detailItems)
//         })
//         .catch(() => {
//             res.status(500).json({error: 'could not fetch documents'})
//         })
// })