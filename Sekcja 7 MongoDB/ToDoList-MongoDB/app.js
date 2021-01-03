const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true }, { useUnifiedTopology: true })

function addNewToDo(toDosCollection, title) {
    toDosCollection.insertOne({
        title,
        done: false,
    }, err => {
        if (err) { console.log("error while truing to insert", err) }
        else {
            console.log("has been added")
        }
    })


    client.close();
}


function doTheToDo(toDosCollection) {

    const [command, ...args] = process.argv.splice(2)

    switch (command) {
        case 'add':
            addNewToDo(toDosCollection, args[0]);
            break


    }
}


client.connect(err => {
    if (err) {
        console.log("blad!! ZJEBALO SIE!!!", err)
    } else {
        console.log("udalo sie!!")

        const db = client.db('test')

        const toDosCollection = db.collection('todos')

        doTheToDo(toDosCollection)

        client.close();



    }
});

