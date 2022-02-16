const highScorebtn = document.getElementById('high-score')
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')


let shuffledQuestions, currentQuestionIndex


const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<js>', correct: false },
            { text: '<scripting>', correct: false },
        ]
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        answers: [
            { text: 'document.getElement("p").innerHTML = "Hello World!"', correct: false },
            { text: 'document.getElementById("demo").innerHTML = "Hello World!"', correct: true },
            { text: 'document.getElementByName("p").innerHTML = "Hello World!"', correct: false },
            { text: '#demo.innerHTML = "Hello World!"', correct: false },
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'Both the <head> section and the <body> section are correct', correct: true },
            { text: 'The <body> section', correct: false },
            { text: 'The <head> section', correct: false },
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script name="xxx.js">', correct: false },
        ]
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    }
]
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    highScorebtn.classList.add('hide')
    timeKeeper();
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();


}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'Finish'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function timeKeeper() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
}