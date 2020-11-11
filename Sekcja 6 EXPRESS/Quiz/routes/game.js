function gameRoutes(app) {

    let goodAnswers = 0;
    let isGameOver = false;
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

        } else if (isGameOver) {
            res.json({
                loser: true
            })
        }

        else {

            const nextQuestion = questions[goodAnswers];

            const { question, answers } = nextQuestion;

            res.json({
                question, answers,
            })
        }
    })

    app.post('/answer/:index', (req, res) => {

        if (isGameOver) {
            res.json({
                loser: true,
            })
        }
        const { index } = req.params;

        const question = questions[goodAnswers]

        const isGoodAnswer = question.correctAnswer === Number(index)

        if (isGoodAnswer) {
            goodAnswers++
            console.log(goodAnswers)
        } else if (!isGoodAnswer) {

            isGameOver = true;
        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        })

    })
    app.get('/help/friend', (req, res) => {

        if (callToFriendUsed) {
            return res.json({
                text: "This tip has been used"
            })

        }
        callToFriendUsed = true

        const doesFriendKnowAnswer = Math.random() < 0.5
        console.log(doesFriendKnowAnswer)
        const question = questions[goodAnswers];

        res.json({
            text: doesFriendKnowAnswer ? `hmm.. i think that answer is ${question.answers[question.correctAnswer]}` : "hmm.. have no idea.. :|"
        })
    })

    app.get('/help/half', (req, res) => {

        if (halfOnHalfUsed) {
            return res.json({
                text: "This tip has been used"
            })

        }
        halfOnHalfUsed = true;

        const question = questions[goodAnswers];

        const answersCopy = question.answers.filter((s, index) =>
            index !== question.correctAnswer,
        )

        console.log(answersCopy)

        answersCopy.splice(~~(Math.random() * answersCopy.length), 1)

        res.json({
            answersToRemove: answersCopy,
        })

    })

    app.get('/help/crowd', (req, res) => {

        if (quesionToTheCrowdUsed) {
            return res.json({
                text: "This tip has been used"
            })

        }
        quesionToTheCrowdUsed = true;

        const chart = [10, 20, 30, 40];

        for (let i = chart.length - 1; i > 0; i--) {

            const change = Math.floor(Math.random() * 20 - 10)

            chart[i] += change;
            chart[i - 1] -= change;
        }

        const question = questions[goodAnswers];

        const { correctAnswer } = question;

        [chart[3], chart[correctAnswer]] = [chart[correctAnswer], chart[3]]


        res.json({
            chart,
        })
    })
}
module.exports = gameRoutes;