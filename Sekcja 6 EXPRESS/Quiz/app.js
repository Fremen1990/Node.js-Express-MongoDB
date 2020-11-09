const express = require('express');

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`You are listening on port http://localhost:${port}`)
})

let goodAnswers = 0;
let callToFriendUsed = false;
let quesionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [{
    question: "What is the best programming language?",
    answers: ["C++", "Fortran", "JavaScrupt", "Java"],
    correctAnswer: 0,
},
{
    question: "Is this course cool?",
    answers: ["No", "I dont know", "Have no idea", "YES!!"],
    correctAnswer: 3,
},
{
    question: "Do you wanna pizza??",
    answers: ["Yes", "no!!", "yammy", "no way! im dieting!"],
    correctAnswer: 2,

}

]



app.get('/', (req, res) => {
    res.send("WORKING!!")
})

