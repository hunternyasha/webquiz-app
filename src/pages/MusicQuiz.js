import { useState } from "react";

const MusicQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: `Who is known as the "King of Pop"?`,
      options: [
        { id: 0, text: "Prince", isCorrect: false },
        { id: 1, text: "Frank Sinatra", isCorrect: false },
        { id: 2, text: "Elvis Presley", isCorrect: false },
        { id: 3, text: "Michael Jackson", isCorrect: true },
      ],
    },
    {
      text: `Which artist released the album "Lemonade" in 2016?`,
      options: [
        { id: 0, text: "Beyonce", isCorrect: true },
        { id: 1, text: "Adele", isCorrect: false },
        { id: 2, text: "Cardi B", isCorrect: false },
        { id: 3, text: "Rihanna", isCorrect: false },
      ],
    },
    {
      text: `What is the best-selling album of all time?`,
      options: [
        { id: 0, text: `"Thriller" by Michael Jackson`, isCorrect: true },
        {
          id: 1,
          text: ` "The Bodyguard" by Whitney Houston / various artists`,
          isCorrect: false,
        },
        { id: 2, text: `"Back in Black" by AC/DC`, isCorrect: false },
        { id: 3, text: `"Falling" into You by Celine Dion`, isCorrect: false },
      ],
    },
    {
      text: `Who sang the theme song for the James Bond film "Skyfall"?`,
      options: [
        { id: 0, text: "Celine Dion", isCorrect: false },
        { id: 1, text: "Adele", isCorrect: true },
        { id: 2, text: "Billie Eilish", isCorrect: false },
        { id: 3, text: "Lady Gaga", isCorrect: false },
      ],
    },
    {
      text: `Who sang the song "I Will Always Love You," which became a major hit for the movie "The Bodyguard"?`,
      options: [
        { id: 0, text: "Whitney Houston", isCorrect: false },
        { id: 1, text: " Michael Jackson", isCorrect: true },
        { id: 2, text: "The Beatles", isCorrect: true },
        { id: 3, text: "Bob Dylan", isCorrect: false },
      ],
    },
    {
      text: `Which rapper released the album "DAMN." in 2017?`,
      options: [
        { id: 0, text: "J Cole", isCorrect: false },
        { id: 1, text: "JAY-Z", isCorrect: false },
        { id: 2, text: "Lil Wayne", isCorrect: false },
        { id: 3, text: "Kendrick Lamar", isCorrect: true },
      ],
    },
    {
      text: `Which rap group released the hit song "Straight Outta Compton"?`,
      options: [
        { id: 0, text: "N.W.A (Ni**az Wit Attitudes)", isCorrect: true },
        { id: 1, text: "Wutang Clan", isCorrect: false },
        { id: 2, text: "OutKast", isCorrect: false },
        { id: 3, text: "A Tribe Called Quest", isCorrect: false },
      ],
    },
    {
      text: `Who is known for his alter ego "Slim Shady"?`,
      options: [
        { id: 0, text: `Eminem`, isCorrect: true },
        { id: 1, text: ` DR Dre`, isCorrect: false },
        { id: 2, text: `Snoop Dogg`, isCorrect: false },
        { id: 3, text: `Lil Wayne`, isCorrect: false },
      ],
    },
    {
      text: `Which rapper is known for his debut album "Illmatic"?`,
      options: [
        { id: 0, text: "2 Pac", isCorrect: false },
        { id: 1, text: "Nas", isCorrect: true },
        { id: 2, text: "Snoop Dogg", isCorrect: false },
        { id: 3, text: "Jay Z", isCorrect: false },
      ],
    },
    {
      text: `Who is often credited as the pioneer of West Coast gangsta rap?`,
      options: [
        { id: 0, text: "R.Z.A", isCorrect: false },
        { id: 1, text: "Ice Cude", isCorrect: false },
        { id: 2, text: "Dr Dre", isCorrect: true },
        { id: 3, text: "Snoop Dogg", isCorrect: false },
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
        <h1>Music Quiz</h1>
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
            <ul >
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

export default MusicQuiz;
