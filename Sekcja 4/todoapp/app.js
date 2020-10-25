// console.log(process.argv.slice(2))

const parseArgs = require('minimist')
const colors = require('colors')

const command = parseArgs(process.argv.slice(2, 3));

delete command._

// console.log(command)

const handleCommand = ({ add, remove, list }) => {

    console.log(add, remove, list)

    if (add) {
        if (typeof add !== "string") {
            return console.log("please use name (text!! not numbers!!)".red)
        } else if (add.length < 7) {
            return console.log("task name needs to have more than 6 signs".red)
        }
        console.log("i will add sth")
        handleData();
    } else if (remove) {
        if (typeof remove !== "string" || remove.length < 7) {
            return console.log("name of task you want to delete, needs to be text and have more than 6 signs".red)
        }
        console.log("i will remove sth")
        handleData();
    } else if (list || list === "") {
        console.log("see the list")
        handleData();
    } else {
        console.log('do not understand the message, please use commands --add="", --remove="" or --list')
    }


}

const handleData = () => { };
handleCommand(command);
