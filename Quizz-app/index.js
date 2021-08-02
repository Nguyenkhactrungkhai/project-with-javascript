const quizData = [
    {
        quesiton: `function a(x) {
            x++;
            return function () {
              console.log(++x);
            };
          }
          
          a(1)();
          a(1)();
          a(1)();
          
          let x = a(1);
          x();
          x();
          x();`,
        a: '1, 2, 3 and 1, 2, 3',
        b: '3, 3, 3 and 3, 4, 5',
        c: '3, 3, 3 and 1, 2, 3',
        d: '1, 2, 3 and 3, 3, 3',
        correct: 'b'
    }, {
        quesiton: `function Name(a, b) {
            this.a = a;
            this.b = b;
          }
          const me = Name("Trung", "Khai");
          console.log(!(a.length - window.a.length));`,
        a: 'undefined',
        b: 'NaN',
        c: 'true',
        d: 'false',
        correct: 'c'
    }, {
        quesiton: `const x = function (...x) {
            let k = (typeof x).length;
            let y = () => "freetut".length;
            let z = { y: y };
          
            return k - z.y();
          };
          
          console.log(Boolean(x()));`,
        a: 'true',
        b: '1',
        c: '-1',
        d: 'false',
        correct: 'a'
    }, {
        quesiton: `const js = { language: "loosely type", label: "difficult" };

        const edu = { ...js, level: "PhD" };
        
        const newbie = edu;
        
        delete edu.language;

        console.log(Object.keys(newbie).length);`,
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        correct: 'a'
    }, {
        quesiton: `let x = {};
        let y = {};
        let z = x;
        
        console.log(x == y);
        console.log(x === y);
        console.log(x == z);
        console.log(x === z);`,
        a: 'true true true true;',
        b: 'false false false false;',
        c: 'true true false false;',
        d: 'false false true true;',
        correct: 'd'
    }, 
    
];

const quiz =  document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const quesitonEl =  document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text"); 
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQizData = quizData[currentQuiz];
 
    quesitonEl.innerText = currentQizData.
    quesiton;
    
    a_text.innerText = currentQizData.a;   
    b_text.innerText = currentQizData.b;   
    c_text.innerText = currentQizData.c;   
    d_text.innerText = currentQizData.d;       
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();
    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].
            correct) {
            score++;
        } 

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            // Todo : Show results 
            quiz.innerHTML = `<h2> You answer correctly at  ${score}/ ${quizData.length} questions</h2>`
    
        }
    }

    
})