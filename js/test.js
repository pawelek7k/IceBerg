let currentQuestions = 0;
let score = 0;
let selectedAnswer = [];
const totalQuestions = polishQuestions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous-btn-test');
const restartButton = document.querySelector('.next-btn-test');
const result = document.querySelector('.result');

function generateQuestions (index) {
    const question - questions[index].answer1Total;
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;

    questionEl.innerHTML = `${index + 1}. ${question.question}`;
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}