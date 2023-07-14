import { useState } from "react";
const SportsQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: `Who is the all-time leading scorer in NBA (National Basketball Association) history?`,
      options: [
        { id: 0, text: "Michael Jordan", isCorrect: false },
        { id: 1, text: "Magic Johnson", isCorrect: false },
        { id: 2, text: "Kobe Bryant", isCorrect: false },
        { id: 3, text: "Kareem Abdul-Jabbar", isCorrect: true },
      ],
    },
    {
      text: `Which country has won the most FIFA World Cup titles in men's soccer?`,
      options: [
        { id: 0, text: "Brazil", isCorrect: true },
        { id: 1, text: "Spain", isCorrect: false },
        { id: 2, text: "Italy", isCorrect: false },
        { id: 3, text: "England", isCorrect: false },
      ],
    },
    {
      text: `Who holds the record for the fastest 100-meter sprint in the history of athletics?`,
      options: [
        { id: 0, text: `Usain Bolt`, isCorrect: true },
        {
          id: 1,
          text: `Tyson Gay `,
          isCorrect: false,
        },
        { id: 2, text: `Yohan Blake `, isCorrect: false },
        { id: 3, text: `Carl Lewis`, isCorrect: false },
      ],
    },
    {
      text: `Who won the FIFA World Cup in 2018?`,
      options: [
        { id: 0, text: "Brazil", isCorrect: false },
        { id: 1, text: "France", isCorrect: true },
        { id: 2, text: "Spain", isCorrect: false },
        { id: 3, text: "Argentina", isCorrect: false },
      ],
    },
    {
        text: `Who is the all-time leading goal scorer in the UEFA Champions League?`,
        options: [
          { id: 0, text: "Lionel Messi", isCorrect: false },
          { id: 1, text: "Cristiano Ronaldo", isCorrect: true },
          { id: 2, text: "Ronaldino", isCorrect: false },
          { id: 3, text: "Kaka", isCorrect: false },
        ],
      },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <>
      <div className="quiz container text-center">
        <h1>Sports Quiz</h1>
        <h2>Current Score : {score}</h2>
        {showResults ? (
          <div className="results">
            <h1>Questions Answered</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()} className="btn btn-primary">
              Restart Game
            </button>
          </div>
        ) : (
          <div className="questions">
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3>{questions[currentQuestion].text}</h3>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}>
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SportsQuiz;
