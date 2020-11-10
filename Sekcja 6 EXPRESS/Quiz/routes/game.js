function gameRoutes(app) {

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
    }]


    app.get('/', (req, res) => {
        res.send("WORKING!!")
    })

    app.get('/question', (req, res) => {

        if (goodAnswers === questions.length) {
            res.json({
                winner: true,
            });
        } else {

            const nextQuestion = questions[goodAnswers];

            const { question, answers } = nextQuestion;

            res.json({
                question, answers,
            })
        }
    })
    app.post('/answer/:index', (req, res) => {
        const { index } = req.params;

        const question = questions[goodAnswers - 1]

        console.log("question")


    })


}
module.exports = gameRoutes;