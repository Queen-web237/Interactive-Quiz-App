const myQuestions = [
    {
        q: "which language adds interactivity to a site?",
        options: ["HTML", "CSS", "Python","JavaScript"],
        correct: "JavaScript"
    },
    {
        q: "what was Project 4 called?",
        options: ["Creative Studio", "Quiz App", "Portfolio", "Landing Page"],
        correct: "Creative Studio"
    },
    {
        q: "Is GitHub used for hosting websites?",
        options: ["No", "Yes", "Only for images", "Only for CSS"],
        correct: "Yes"
    }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
    const questionE1 = document.getElementById('question');
    const optionsE1 = document.getElementById('options-container');

    // Clear old options
    optionsE1.innerHTML = '';

    let currentData = myQuestions[currentQ];
    questionE1.innerText = currentData.q;

    currentData.options.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.onclick = () => handleAnswer(choice);
        optionsE1.appendChild(btn);
    });
}

function handleAnswer(select) {
    if (select === myQuestions[currentQ].correct) {
        score++;
    }

    currentQ++;

    if (currentQ < myQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {

document.getElementById('question').classList.add('hidden');

document.getElementById('options-container').classList.add('hidden');

    const resultScreen =
document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');

    document.getElementById('score-text').innerText = `score; ${score} /${myQuestions.length};`

    const msg = document.getElementById('message');
    if (score === 3) {
        msg.innerText = "you're a Digital Masterpiece creator.";
    } else {
        msg.innerText = "keep practicing, you're getting there. ";
    }
}

loadQuestion();