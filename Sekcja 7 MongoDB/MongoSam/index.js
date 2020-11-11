const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

client.connect(err => {
    if (err) {
        console.log("blad!!", err)
    } else {
        console.log("udalo sie!!")

        const db = client.db('test')

        const cars = db.collection('cars')

        client.close();



    }
});

