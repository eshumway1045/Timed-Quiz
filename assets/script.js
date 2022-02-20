
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: ['<script>','<javascript>','<js>','<scripting>'],
        correctAnswer: '<script>'

    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        answers: ['document.getElement("p").innerHTML = "Hello World!"', 'document.getElementById("demo").innerHTML = "Hello World!"','document.getElementByName("p").innerHTML = "Hello World!"','#demo.innerHTML = "Hello World!"'],
        correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!"'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: ['Both the <head> section and the <body> section are correct','The <body> section', 'The <head> section'],
        correctAnswer: 'Both the <head> section and the <body> section are correct'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">'],
        correctAnswer: '<script src="xxx.js">'
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answers: ['True', 'False'],
        correctAnswer:'False'
    }
];


function beginQuiz(){
    timeKeeper();
    createQuestion();
}

function timeKeeper(duration, display) {
    var timeInterval  = setInterval(function(){
        secondsLeft --;
        timer.textContent = "Time Remaining: " + secondsLeft + " sec";

        if(secondsLeft <= 0 || (questionIndex > totalQuestions - 1 )){
            result.style.display = "none";
            quizContent.style.display = "none";
            viewResults();
            clearInterval(timeInterval);
            timer.textContent = "";
        }
    }, 1000);
}

startButton.addEventListener('click', beginQuiz);