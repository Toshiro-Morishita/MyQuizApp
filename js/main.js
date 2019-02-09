(function() {
  'use strict';

  let question = document.getElementById('question');
  let btn = document.getElementById('btn');
  let answers = document.querySelectorAll('#answers > li');
  let shuffledAnswers;

  let quizSet = [
    {q: 'What is A?', a: ['A0', 'A1', 'A2']},
    {q: 'What is B?', b: ['b0', 'b1', 'b2']},
    {q: 'What is C?', c: ['c0', 'c1', 'c2']},
  ];

  let currentNum = 0;
  let isAnswered;

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
    question.textContent = quizSet[currentNum].q;
    shuffledAnswers = shuffle(quizSet[currentNum].a.slice());
    answers[0].textContent = shuffledAnswers[0];
    answers[1].textContent = shuffledAnswers[1];
    answers[2].textContent = shuffledAnswers[2];
    isAnswered = false;
  }

  function setEvents() {
    var i;
    for (i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', function() {
        checkAnswer(this);
      });
    }
  }

  function checkAnswer(node) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (node.textContent === quizSet[currentNum].a[0]) {
      node.textContent += ' ... Correct!'
      node.classList.add('correct');
    } else {
      node.textContent += ' ... Wrong!';
      node.classList.add('wrong');    }
  }

  setQuiz();
  setEvents()




})();
