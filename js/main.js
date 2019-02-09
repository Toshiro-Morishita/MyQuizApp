(function() {
  'use strict';

  let question = document.getElementById('question');
  let btn = document.getElementById('btn');
  let answers = document.querySelectorAll('#answers > li');

  let quizSet = [
    {q: 'What is A?', a: ['A0', 'A1', 'A2']},
    {q: 'What is B?', b: ['b0', 'b1', 'b2']},
    {q: 'What is C?', c: ['c0', 'c1', 'c2']},
  ];

  let currentNum = 0;

  question.textContent = quizSet[currentNum].q;
  answers[0].textContent = quizSet[currentNum].a[0];
  answers[1].textContent = quizSet[currentNum].a[1];
  answers[2].textContent = quizSet[currentNum].a[2];

})();
