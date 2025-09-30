import { useState, useEffect } from "react";

function Timer({ setTimeTaken, isFinished }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isFinished) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      setTimeTaken((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished, setTimeTaken]);

  return (
    <div className="text-right text-gray-600 mb-4">
      ⏱ Time: {seconds}s
    </div>
  );
}

export default Timer;
