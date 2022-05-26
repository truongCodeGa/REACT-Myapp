import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const HandleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const HandleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h3>Time: {count} s</h3>
      <button onClick={HandleStart}>Start</button> <br />
      <button onClick={HandleStop}>Stop</button>
    </div>
  );
};

export default Stopwatch;
