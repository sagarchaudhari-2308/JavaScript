const questions = [
    {
        question: "What is your name?",
        answer:[
            {text:"Sagar", correct: false},
            {text:"Priyanka", correct: true},
            {text:"Rameshwar", correct: false},
            {text:"Silika", correct: true}
        ]
    },
    {
        question: "",
        answer:[
            {text:"", correct: false},
            {text:"", correct: true},
            {text:"", correct: false},
            {text:"", correct: true}
        ]
    },
    {
        question: "",
        answer:[
            {text:"", correct: false},
            {text:"", correct: true},
            {text:"", correct: false},
            {text:"", correct: true}
        ]
    },
    {
        question: "",
        answer:[
            {text:"", correct: false},
            {text:"", correct: true},
            {text:"", correct: false},
            {text:"", correct: true}
        ]
    },
];

const qustionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)    });
}
startQuiz();