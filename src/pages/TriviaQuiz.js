import { useState } from "react";
const TriviaQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: `Who painted the famous artwork "Mona Lisa"?`,
      options: [
        { id: 0, text: "Michelangelo", isCorrect: false },
        { id: 1, text: "Pablo Picasso", isCorrect: false },
        { id: 2, text: "Vincent van Gogh", isCorrect: false },
        { id: 3, text: "Leonardo da Vinci", isCorrect: true },
      ],
    },
    {
      text: `Who painted the famous artwork "The Last Supper"?`,
      options: [
        { id: 0, text: "Leonardo da Vinci", isCorrect: true },
        { id: 1, text: "Pablo Picasso", isCorrect: false },
        { id: 2, text: "Vincent van Gogh", isCorrect: false },
        { id: 3, text: "Michelangelo", isCorrect: false },
      ],
    },
    {
      text: `Which country is known as the Land of the Rising Sun?`,
      options: [
        { id: 0, text: `Japan`, isCorrect: true },
        {
          id: 1,
          text: ` China `,
          isCorrect: false,
        },
        { id: 2, text: `Taiwan`, isCorrect: false },
        { id: 3, text: `Thailand`, isCorrect: false },
      ],
    },
    {
      text: `What is the largest ocean in the world?`,
      options: [
        { id: 0, text: "Atlantic Ocean", isCorrect: false },
        { id: 1, text: "Pacific Ocean ", isCorrect: true },
        { id: 2, text: "Southern Ocean", isCorrect: false },
        { id: 3, text: "Arctic Ocean", isCorrect: false },
      ],
    },
    {
      text: `Which city hosted the 2016 Summer Olympics?`,
      options: [
        { id: 0, text: "Sydney, Australia", isCorrect: false },
        { id: 1, text: "Rio de Janeiro, Brazil", isCorrect: true },
        { id: 2, text: "London, United Kingdom", isCorrect: false },
        { id: 3, text: "Beijing, China", isCorrect: false },
      ],
    },
    {
      text: `Which continent is the largest in terms of land area?`,
      options: [
        { id: 0, text: "Africa", isCorrect: false },
        { id: 1, text: "Asia", isCorrect: true },
        { id: 2, text: "Europe", isCorrect: false },
        { id: 3, text: "North America", isCorrect: false },
      ],
    },
    {
      text: `In Greek mythology, who is the god of the sea?`,
      options: [
        { id: 0, text: "Zues", isCorrect: false },
        { id: 1, text: "Poseidon", isCorrect: true },
        { id: 2, text: "Aphrodite", isCorrect: false },
        { id: 3, text: "Hades", isCorrect: false },
      ],
    },
    {
      text: `In which year did the Titanic sink?`,
      options: [
        { id: 0, text: "1901", isCorrect: false },
        { id: 1, text: "1912", isCorrect: true },
        { id: 2, text: "1913", isCorrect: false },
        { id: 3, text: "1910", isCorrect: false },
      ],
    },
    {
      text: `What is the chemical symbol for the element gold?`,
      options: [
        { id: 0, text: "Pb ", isCorrect: false },
        { id: 1, text: "Au", isCorrect: true },
        { id: 2, text: "Ag", isCorrect: false },
        { id: 3, text: "Fe", isCorrect: false },
      ],
    },
    {
      text: `Which famous physicist developed the theory of general relativity?`,
      options: [
        { id: 0, text: "Isaac Newton ", isCorrect: false },
        { id: 1, text: "Albert Einstein", isCorrect: true },
        { id: 2, text: "Niels Bohr", isCorrect: false },
        { id: 3, text: "Galileo Galilei", isCorrect: false },
      ],
    },
    {
      text: `What is the capital city of Australia?`,
      options: [
        { id: 0, text: "Sydney", isCorrect: false },
        { id: 1, text: "Canberra", isCorrect: true },
        { id: 2, text: "Melbourne", isCorrect: false },
        { id: 3, text: "Gold Coast", isCorrect: false },
      ],
    },
    {
      text: `Who is the Greek goddess of love and beauty?`,
      options: [
        { id: 0, text: "Athena", isCorrect: false },
        { id: 1, text: "Aphrodite", isCorrect: true },
        { id: 2, text: "Hera", isCorrect: false },
        { id: 3, text: "Hestia", isCorrect: false },
      ],
    },
    {
      text: `Who is the lead actor in the movie "The Wolf of Wall Street"?`,
      options: [
        { id: 0, text: "Jonah Hill", isCorrect: false },
        { id: 1, text: "Leonardo DiCaprio", isCorrect: true },
        { id: 2, text: "Rob Reiner", isCorrect: false },
        { id: 3, text: "Matthew McConaughey", isCorrect: false },
      ],
    },
    {
      text: `What is the largest organ in the human body?`,
      options: [
        { id: 0, text: "Skeleton", isCorrect: false },
        { id: 1, text: "Skin", isCorrect: true },
        { id: 2, text: "Lungs", isCorrect: false },
        { id: 3, text: "Heart", isCorrect: false },
      ],
    },
    {
      text: `Who is the Greek goddess of love and beauty?`,
      options: [
        { id: 0, text: "Athena", isCorrect: false },
        { id: 1, text: "Aphrodite", isCorrect: true },
        { id: 2, text: "Hera", isCorrect: false },
        { id: 3, text: "Hestia", isCorrect: false },
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
        <h1>Trivia Quiz</h1>
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

export default TriviaQuiz;
