//SET OF QUESTIONS
const questions = [
    {
        question: "What does DOM stand for in JavaScript?",
        options: [
            "Document Object Model", 
            "Data Object Model",
            "Document Orientation Model",
            "Display Object Management"
        ],
        answer:"Document Object Model"
    },
    {
        question:"Which keyword is used to declare a constant in JavaScript?",
        options:[
            "var",
            "let",
            "const",
            "static"
        ],
        answer:"const"
    },
    {
        question:"What will typeof null return",
        options:[
            "object",
            "null",
            "undefined",
            "boolean"
        ],
        answer:"object"
    },
    {
        question:"Which built-in method is used to convert a string to all lowercase letters?",
        options:[
            "toLower()",
            "toLowerCase()",
            "changeCase()",
            "toSmallCase()"
        ],
        answer:"toLowerCase()"
    },
    {
    question: "Which of these is not a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    answer: "Float"
  },
  {
    question: "What is the output of `2 + '2'` in JavaScript?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "** This is a comment"
    ],
    answer: "// This is a comment"
  },
  {
    question: "What does `NaN` stand for?",
    options: ["No actual number", "Not a number", "Not a null", "Name as number"],
    answer: "Not a number"
  },
  {
    question: "Which method adds a new element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which symbol is used for strict equality comparison?",
    options: ["=", "==", "===", "!=="],
    answer: "==="
  }
]

const question= document.getElementById("question");
const nextbtn= document.getElementById("next-btn");
const resultbox= document.getElementById("result-box");
const optionButton= document.querySelectorAll(".option-btn");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score");

let currentQuestionIndex= 0;
let score=0;
function loadQuestions(){
    resetState();
    const currentQuestion= questions[currentQuestionIndex];
    question.innerText= currentQuestion.question;
    optionButton.forEach((button, index)=>{
        button.innerText= currentQuestion.options[index];
        button.onclick=()=>{
            selectAnswer(button, currentQuestion.answer);
        }
    })
}



function selectAnswer(selectedBtn, correctAnswer){
    const userAnswer= selectedBtn.innerText;

    if(userAnswer===correctAnswer){
        selectedBtn.style.backgroundColor="green";
        score++;
    }else{
        selectedBtn.style.backgroundColor= "red"
    }

    optionButton.forEach(button=>{
        button.disabled=true;
        if(button.innerText===correctAnswer){
            button.style.backgroundColor="green";
        }
    })
    nextbtn.style.display="block";
}
function resetState(){
    nextbtn.style.display= "none";
    optionButton.forEach((button)=>{
        button.disabled= false;
        button.style.backgroundColor="";
    })
}

nextbtn.addEventListener('click', function(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        loadQuestions();
    }else{
        showResult();
    }
});

function showResult(){
    document.getElementById('quiz-box').classList.add("hidden");
    resultbox.classList.remove("hidden");
    scoreText.innerText= `${score}/${questions.length}`
}

// Restart quiz
document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultbox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestions();
});

loadQuestions();