import { useState } from "react";
const MoviesQuiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
      {
        text: `Which actor played the character Tony Stark/Iron Man in the Marvel Cinematic Universe?`,
        options: [
          { id: 0, text: "Mark Ruffalo", isCorrect: false },
          { id: 1, text: "Tom Hiddleston", isCorrect: false },
          { id: 2, text: "Chris Evans", isCorrect: false },
          { id: 3, text: "Robert Downey Jr", isCorrect: true },
        ],
      },
      {
        text: `Who directed the "Lord of the Rings" film trilogy?`,
        options: [
          { id: 0, text: "Peter Jackson", isCorrect: true },
          { id: 1, text: "Steven Spielberg", isCorrect: false },
          { id: 2, text: "Martin Scorsese", isCorrect: false },
          { id: 3, text: "James Cameron", isCorrect: false },
        ],
      },
      {
        text: `Who directed the 1994 film "Pulp Fiction"?`,
        options: [
          { id: 0, text: `Quentin Tarantino`, isCorrect: true },
          {
            id: 1,
            text: ` Spike Lee `,
            isCorrect: false,
          },
          { id: 2, text: `Alfred Hitchcock`, isCorrect: false },
          { id: 3, text: `Christopher Nolan`, isCorrect: false },
        ],
      },
      {
        text: `Which actor played the character Jack Sparrow in the "Pirates of the Caribbean" film series?`,
        options: [
          { id: 0, text: "Chris Evans", isCorrect: false },
          { id: 1, text: "Johnny Depp", isCorrect: true },
          { id: 2, text: "Tom Hiddleston", isCorrect: false },
          { id: 3, text: "Samuel L Jackson", isCorrect: false },
        ],
      },
      {
        text: `In the movie "The Dark Knight," who played the character Joker?`,
        options: [
          { id: 0, text: "Jared Leto", isCorrect: false },
          { id: 1, text: "Heath Ledger", isCorrect: true },
          { id: 2, text: "Joaquin Phoenix", isCorrect: false },
          { id: 3, text: "Jack Nicholson", isCorrect: false },
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
          <h1>movie quiz</h1>
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
}
 
export default MoviesQuiz;