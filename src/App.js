import React from 'react';
import WordleBoard from './components/WordleBoard';
import Keyboard from './components/Keyboard';

function App() {
  const guesses = ['MIGHT', 'FLOOD', 'STRAY'];
  const answer = 'MOODY';
  let correctCount = 0;
  let partiallyCorrectCount = 0;

  guesses.forEach((guess) => {
    let correct = 0;
    let partiallyCorrect = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess.charAt(i) === answer.charAt(i)) {
        correct++;
      } else if (answer.includes(guess.charAt(i))) {
        partiallyCorrect++;
      }
    }
    if (correct === answer.length) {
      correctCount++;
    } else if (correct + partiallyCorrect === answer.length) {
      partiallyCorrectCount++;
    }
  });

  return (
    <div>
      <WordleBoard />
      <Keyboard />
      <div>
        <p>Number of correct guesses: {correctCount}</p>
      </div>
    </div>
  );
}

export default App;
