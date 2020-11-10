const question = document.querySelector("#question");
// const answer1 = document.querySelector("#answer1");
// const answer2 = document.querySelector("#answer2");
// const answer3 = document.querySelector("#answer3");
// const answer4 = document.querySelector("#answer4");

function fillQuestionElements(data) {
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

function sendAnswer(answerIndex) {
    fetch(`/anwser/${answerIndex}`, {
        method: 'POST',
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        });
}

const buttons = document.querySelectorAll('button');
for (const button of buttons) {

    button.addEventListener("click", (event) => {

        const answerIndex = event.target.dataset.answer;
        console.log(answerIndex)
        sendAnswer(answerIndex)

    })
}