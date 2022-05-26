import React, { useState } from "react";
import "./ToggleStyle.css";
// Bài 21: stateless và stateful functional components
// // stateless functional components:components nhưng ko sử dụng state
// const Toggle = () => {
//   return <div className="toggle"></div>;
// };
// // statefull functional components:components có sử dụng state
// const Toggle2 = () => {
//     // const [count, setcount] = useState();
// return <div className="toggle2"></div>;
// }
// export default Toggle;
// *****************************************
// Bài 22: Tìm hiểu useState cơ bản phần 1
function Toggle() {
  // 1. enabling state: useState(initialize value)
  // => initialize value: Boolean(true, false), number(1,2,3,4)
  // string("","abc"), undefined, null, object{title:"frontend"},
  // array[1,2,3,4]
  // 2. initialize state: giá trị khởi tạo useState(false)
  // 3. reading state
  // 4. update state
  //   const array = useState(false);
  //   console.log(array); // [false, function]
  //   console.log(array[0]);
  //   console.log(array[1]);
  //   const arr = [1, 2];
  //   console.log(arr[1], arr[2]);
  // Bài 23: Tìm hiểu useState cơ bản phần 2
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    //setOn(callback) -> setOn(prevState) => !prevState
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
export default Toggle;
