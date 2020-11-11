const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

client.connect(err => {
    if (err) {
        console.log("blad!!", err)
    } else {
        console.log("udalo sie!!")

        const db = client.db('test')

        const cars = db.collection('cars')

        // cars.deleteOne({ _id: mongo.ObjectID("5fac6e97f0d6e3516f39b8a6") })

        cars.updateMany({

            brand: "Saab",

        }, {
            $set: {
                model: "900",
            }
        }, err => {
            if (err) {
                console.log("error during actualllizaaaation")
            } else { console.log("all is fine") }
        }

        )

        // cars.find({}).toArray((err, dataCars) => {
        //     if (err) {
        //         console.log("wrong query!! ")
        //     } else {
        //         console.log("Cars: ", dataCars)
        //     }
        // })


        client.close();



    }
});

