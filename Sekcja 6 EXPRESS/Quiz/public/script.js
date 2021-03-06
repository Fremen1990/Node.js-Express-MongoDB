const question = document.querySelector("#question");
// const answer1 = document.querySelector("#answer1");
// const answer2 = document.querySelector("#answer2");
// const answer3 = document.querySelector("#answer3");
// const answer4 = document.querySelector("#answer4");

const gameBoard = document.querySelector('#game-board')
const h2 = document.querySelector('h2')

function fillQuestionElements(data) {

    if (data.winner === true) {
        gameBoard.style.display = 'none'
        h2.innerText = "WYGRAŁEŚ!!"
        return
    }


    if (data.loser === true) {
        gameBoard.style.display = 'none'
        h2.innerText = "PRZEGRAŁEŚ!! :("
        return
    }

    question.innerText = data.question
    // answer1.innerText = data.answers[0]
    // answer2.innerText = data.answers[1]
    // answer3.innerText = data.answers[2]
    // answer4.innerText = data.answers[3]

    for (const i in data.answers) {

        const answerElement = document.querySelector(`#answer${Number(i) + 1}`);
        answerElement.innerText = data.answers[i]
        console.log(i)
    };
}

function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(data => {
            fillQuestionElements(data)
        })
}
showNextQuestion()


const goodAnsersSpan = document.querySelector('#good-answers')

function handleAnswerFeedback(data) {
    goodAnsersSpan.innerText = data.goodAnswers;
    showNextQuestion()
}

function sendAnswer(answerIndex) {
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
    })
        .then(r => r.json())
        .then(data => {
            handleAnswerFeedback(data)
            console.log(data)
        });
}

const buttons = document.querySelectorAll('.answer-btn');
for (const button of buttons) {

    button.addEventListener("click", (event) => {

        const answerIndex = event.target.dataset.answer;
        console.log(answerIndex)
        sendAnswer(answerIndex)
    })

    const tipDiv = document.querySelector("#tip");

    function handleFriendAnswer(data) {
        tipDiv.innerText = data.text
    }

    function callToFriend() {
        console.log("wsgsr")
        fetch('/help/friend', {
            method: 'GET',
        })
            .then(r => r.json())
            .then(data => {
                handleFriendAnswer(data)
            })
    }
}
document.querySelector("#callToFriend").addEventListener("click", (callToFriend))


function handleHalfOnHalf(data) {
    if (typeof data.text === "string") {
        const tipDiv = document.querySelector("#tip");
        tipDiv.innerText = data.text;
    } else {
        for (const button of buttons) {
            if (data.answersToRemove.indexOf(button.innerText) > -1) {
                button.innerText = "";
            }
        }

    }
}
function halfOnHalf() {
    fetch('/help/half', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(data => {
            handleHalfOnHalf(data)
        })
}

document.querySelector("#halfOnHalf").addEventListener("click", (halfOnHalf))



///////////////////////////////////////////////////////////

function handleQuesionToTheCrowd(data) {
    if (typeof data.text === "string") {
        const tipDiv = document.querySelector("#tip");
        tipDiv.innerText = data.text;
    } else {
        data.chart.forEach((percent, index) => {

            buttons[index].innerText = `${buttons[index].innerText}:${percent}%`

        })
    }
}
function quesionToTheCrowd() {
    fetch('/help/crowd', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(data => {
            handleQuesionToTheCrowd(data)
        })
}

document.querySelector("#quesionToTheCrowd").addEventListener("click", (quesionToTheCrowd))