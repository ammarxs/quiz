import { useState, useEffect } from "react";
import questionsData from "../data/questions.json";
import QuestionCard from "./QuestionCard.jsx";
import Result from "./Result.jsx";
import Timer from "./Timer.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // store user answers
  const [showResult, setShowResult] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([
      ...answers,
      { question: questions[current].question, chosen: option, correct: questions[current].answer }
    ]);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
      {!showResult ? (
        <>
          <Timer setTimeTaken={setTimeTaken} isFinished={showResult} />
          <QuestionCard
            question={questions[current]}
            current={current}
            total={questions.length}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <>
          <Result score={score} total={questions.length} />
          <Summary answers={answers} timeTaken={timeTaken} />
        </>
      )}
    </div>
  );
}

export default Quiz;
