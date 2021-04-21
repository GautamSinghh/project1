const quizData = [
    {
        question: 'What is the fastest land animal?',
        a: 'Tiger',
        b: 'Wolf',
        c: 'Giraffe',
        d: 'Cheetah',
        correct: 'd',

    },
    {
        question: 'Which of these is the fastest fish?',
        a: 'Shark',
        b: 'Sailfish',
        c: 'Tuna',
        d: 'Flying Fish',
        correct: 'b',
    },
    {
        question: 'What is the fastest bird?',
        a: 'Stork',
        b: 'Eagle',
        c: 'Peregrine Falcon',
        d: 'Hawk',
        correct: 'c',
    },
    {
        question: 'Which of these is the shortest time span?',
        a: 'Century',
        b: 'Decade',
        c: 'Millennium',
        d: 'A dozen years',
        correct: 'b',
    },
    {
        question: 'Which of these is the shortest measurement of length?',
        a: 'Inch',
        b: 'Gramme',
        c: 'Metre',
        d: 'Centimetre',
        correct: 'd',
    },
    {
        question: 'Which of these words best completes this sentence grammatically: He _______ dodged the speeding car.',
        a: 'quickly',
        b: 'either of these',
        c: 'fastly',
        d: 'neither of these',
        correct: 'a',
    },
    {
        question: 'Which of these things most likely takes up the least time?',
        a: 'Watching a movie',
        b: 'Reading a novel with at least 300 pages',
        c: 'Taking a shower',
        d: 'Driving from Los Angeles to New York',
        correct: 'c',
    },
    {
        question: 'What is the shortest sentence in the English language?',
        a: 'I am.',
        b: 'None of these',
        c: 'A.',
        d: 'Go!',
        correct: 'd',
    },
    {
        question: 'Of the following, who was the shortest U.S. president?',
        a: 'James Madison',
        b: 'Abraham Lincoln',
        c: 'William Henry Harrison',
        d: 'George Washington',
        correct: 'a',
    },
    {
        question: 'Which of the following US presidents served for the shortest amount of time?',
        a: 'James Madison',
        b: 'Abraham Lincoln',
        c: 'George Washington',
        d: 'William Henry Harrison',
        correct: 'd',
    },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;


lodeQuiz();

function lodeQuiz() {
     deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }

    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


submitBtn.addEventListener("click", () => {
// if the cheack answers//
    const answer =  getSelected();
  //  console.log(answer)

        if(answer){
            if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
        lodeQuiz();
    }else {
        quiz.innerHTML = `<h2> you answer correctly at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()"></button>`
    }


}
});