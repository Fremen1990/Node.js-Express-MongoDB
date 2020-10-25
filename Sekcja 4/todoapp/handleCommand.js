const handleData = require('./handleData')


const handleCommand = ({ add, remove, list }) => {

    // console.log(add, remove, list)

    if (add) {
        if (typeof add !== "string") {
            return console.log("please use name (text!! not numbers!!)".red)
        } else if (add.length < 7) {
            return console.log("task name needs to have more than 6 signs".red)
        }
        handleData(1, add);
    } else if (remove) {
        if (typeof remove !== "string" || remove.length < 7) {
            return console.log("name of task you want to delete, needs to be text and have more than 6 signs".red)
        }
        handleData(2, remove);
    } else if (list || list === "") {
        handleData(3, null);
    } else {
        console.log('do not understand the message, please use commands --add="", --remove="" or --list'.orange)
    }
}

module.exports = handleCommand;