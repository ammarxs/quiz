function Summary({ answers, timeTaken }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Summary</h3>
      <p className="mb-4">⏱ Total Time: {timeTaken} seconds</p>
      <ul className="space-y-2">
        {answers.map((a, i) => (
          <li
            key={i}
            className={`p-2 rounded-lg ${
              a.chosen === a.correct ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <p className="font-medium">{a.question}</p>
            <p>Your Answer: {a.chosen}</p>
            <p>Correct Answer: {a.correct}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;

