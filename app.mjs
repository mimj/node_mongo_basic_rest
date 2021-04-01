import express from 'express';
import Db from 'mongodb'
import bodyParserrr from 'body-parser'

const dbUrl = 'mongodb://localhost:27017'
const MongoClient = Db.MongoClient

const app = express()
app.use(bodyParserrr.json())


app.get('/products', function (req, res) {
    // Set up the connection to the local db

    MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("catalogue");
        dbo.collection("products").find().toArray(function (err, docs) {

            if (err) throw err;
            res.json(docs)
            db.close();

        });
    });
});

// id = 6066086bf2642eb4ef247aa1
app.get('/products/:id', function (req, res) {

    MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("catalogue");
        dbo.collection("products").findOne({_id: Db.ObjectId(req.params.id)}, function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
});

app.post('/products', function (req, res) {

    MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("catalogue");
        dbo.collection("products").insertOne(req.body, {}, function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
});
app.put('/products/:id', function (req, res) {

    MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("catalogue");
        dbo.collection("products").updateOne({_id: Db.ObjectID(req.params.id)}, {$set: req.body}, {}, function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
});

app.delete('/products/:id', function (req, res) {

    MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("catalogue");
        dbo.collection("products").deleteOne({_id: Db.ObjectID(req.params.id)},  {}, function (err, result) {
            if (err) throw err;
            res.json(result)
            db.close();
        });
    });
});


app.listen(3000, function () {
    console.log("App Started on Port: 3000")
})