const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true }, { useUnifiedTopology: true });

function addNewToDo(toDosCollection, ToDoTask) {

    toDosCollection.insertOne({
        ToDoTask,
        done: false,
    }, err => {
        if (err) {
            console.log("Error while adding", err)
        } else {
            console.log("Task added :)")
        }
    })

}

function showAllToDos(toDosCollection) {
    toDosCollection.find({}).toArray((err, toDos) => {
        if (err) {
            console.log("error whiile listing", err);
        } else {



            const thingsToDo = toDos.filter(todo => !todo.done);
            const thingsToDoDone = toDos.filter(todo => todo.done);

            console.log('# List things to Do (not fiished)')

            for (const todo of thingsToDo) {
                console.log(` - [${todo._id}] ${todo.ToDoTask}`);
            }

            console.log("# List of things done (finished)");

            for (const todo of thingsToDoDone) {
                console.log(` -  [${todo._id}]${todo.ToDoTask}`)
            }

        }
        client.close();
    });

};

function markAsDone(toDosCollection, id) {
    toDosCollection.updateOne({
        _id: mongo.ObjectID(id),
    },
        {
            $set: {
                done: true,
            },
        },



        client.close()

    )
};




function doTheToDo(toDosCollection) {

    const [command, ...args] = process.argv.splice(2);

    switch (command) {
        case "add": ;
            addNewToDo(toDosCollection, adbrgs[0]);
            break;
        case "list":
            showAllToDos(toDosCollection);
            break;
        case "done":
            markAsDone(toDosCollection, args[0]);
            break;
    };

    // console.log(command, args);
}

client.connect(err => {
    if (err) {
        console.log("CONNECTION ERROR :(", err);
    } else {
        console.log("CONNECTION SUCCEED!! :) ");

        const db = client.db("test")

        const toDosCollection = db.collection("toDos")

        doTheToDo(toDosCollection)
    }
}
);
