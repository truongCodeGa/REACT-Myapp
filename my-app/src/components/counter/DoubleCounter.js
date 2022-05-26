import React, { useState } from "react";
//Bài 37: React cập nhật state như thế nào ?
const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const handleDoubleNumber = () => {
    //lúc này count luôn luôn là giá trị ban đầu
    // count = 0 + 1 = 1
    setCount(count + 1); //no callback :
    //lúc này khi dùng callback
    //count là giá trị được set như trên và lấy giá trị
    //count = 1 + 1 = 2
    //count = 2 + 2 = 4
    setCount((count) => count + 1); //callback
  };
  return (
    <div>
      <button onClick={handleDoubleNumber}>Double Counter</button>
      <span className="count">{count}</span>
    </div>
  );
};

export default DoubleCounter;
