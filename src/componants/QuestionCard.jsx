function QuestionCard({ question, current, total, handleAnswer }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">
        Question {current + 1} of {total}
      </h2>
      <p className="mb-4">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
