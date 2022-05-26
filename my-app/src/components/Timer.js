import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
//Bài 69: Tìm hiểu cleanup function trong useEffect
const Timer = () => {
  const [message, setMessage] = useState("evondev");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
