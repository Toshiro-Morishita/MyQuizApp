(function() {
  'use strict';

  let question = document.getElementById('question');
  let btn = document.getElementById('btn');
  let answers = document.querySelectorAll('#answers > li');
  let shuffledAnswers;
  let result = document.getElementById('result');
  let scoreLabel = document.querySelector('#result > p')

  let quizSet = [
    {q: 'What is A?', a: ['A0', 'A1', 'A2']},
    {q: 'What is B?', a: ['B0', 'B1', 'B2']},
    {q: 'What is C?', a: ['C0', 'C1', 'C2']}
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    let i;
    let j;
    let tmp;
    for (i = arr.length - 1; i >= 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function setQuiz() {
    let i;
    question.textContent = quizSet[currentNum].q;
    shuffledAnswers = shuffle(quizSet[currentNum].a.slice());
    isAnswered = false;
    for (i = 0; i < answers.length; i++) {
      answers[i].classList.remove('correct');
      answers[i].classList.remove('wrong');
      answers[i].textContent = shuffledAnswers[i];
    }
    btn.classList.add('disabled');
    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show score';
    }
  }

  function setEvents() {
    var i;
    for (i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        checkAnswer(this);
      });
      }
      btn.addEventListener('click', function() {
        if (this.classList.contains('disabled')) {
          return;
        }
        if (currentNum === quizSet.length) {
          scoreLabel.textContent = 'Score: ' + score + ' / ' + quizSet.length;
          result.classList.add('show')
        } else {
          setQuiz();
        }
      });
    }

  function checkAnswer(node) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (node.textContent === quizSet[currentNum].a[0]) {
      node.textContent += ' ... Correct!';
      node.classList.add('correct');
      score++;
    } else {
      node.textContent += ' ... Wrong!';
      node.classList.add('wrong');
    }
  btn.classList.remove('disabled');
  currentNum++;
}

  setQuiz();
  setEvents();

})();
