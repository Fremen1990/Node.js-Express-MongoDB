const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

client.connect(err => {
    if (err) {
        console.log("blad!!", err)
    } else {
        console.log("udalo sie!!")

        const db = client.db('test')

        const cars = db.collection('cars')

        cars.deleteOne({ _id: mongo.ObjectID("5fac6e97f0d6e3516f39b8a6") })



        client.close();



    }
});

