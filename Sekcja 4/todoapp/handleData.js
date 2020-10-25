const colors = require('colors')
const fs = require('fs')

const handleData = (type, title) => {


    const data = fs.readFileSync('datadb.json', 'utf8')
    let tasks = JSON.parse(data)

    console.log(tasks)

    if (type === 1 || type === 2) {
        const isExisted = tasks.find(task => task.title === title) ? true : false;
        if (type === 1 && isExisted) {
            return console.log("that task already exist!".red)
        } else if (type === 2 && !isExisted) {
            return console.log("cannot delete as task is not existing!".red)
        }
    }

    let dataJSON = ""

    switch (type) {
        case 1:

            tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }))

            console.log("adding the task");
            const id = tasks.length + 1
            tasks.push({ id, title })
            // console.log(tasks);
            dataJSON = JSON.stringify(tasks);
            // console.log(dataJSON);
            fs.writeFileSync('datadb.json', dataJSON);
            console.log(`adding task: ${title}`.white.bgGreen)
            break;

        case 2:
            // console.log("deleting the task");
            const index = tasks.findIndex(task => task.title === title)
            tasks.splice(index, 1)
            console.log(tasks);

            tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }))
            console.log(tasks);

            dataJSON = JSON.stringify(tasks);
            fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Task ${title} has been deleted`.white.bgGreen)
            })
            break;

        case 3:
            console.log(`displaying list have ${tasks.length} positions. \n You have  to do: `);
            if (tasks.length) {
                tasks.forEach((task, index) => {
                    if (index % 2) return console.log(task.title.green);
                    return console.log(task.title.yellow);
                })
            }
            break
    }

};

module.exports = handleData;