function Result({ score, total }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-bold mb-4">Quiz Finished 🎉</h2>
      <p className="text-lg mb-2">
        Score: {score} / {total}
      </p>
    </div>
  );
}

export default Result;
