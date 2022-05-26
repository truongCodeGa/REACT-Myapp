// 1. tao component Tooltip
// 2. Component nay co props la children, props text
// 3. ap dung portal de khi re chuot vao text thi hien thi tooltip
// 4 getBoundinhClientRect()
//Bài 176: Giải bài tooltip phần 1
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../../hooks/useHover";
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className="font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleHover}
      >
        {text}
      </span>
    </div>
  );
};
const TooltipContent = ({ children, coords }) => {
  console.log(coords);
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-lg 
       inline-block absolute -translate-y-full max-w-[200px]
       -translate-x-2/4
       "
      style={{
        top: coords.top - coords.height / 4 + window.screenY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};
export default Tooltip;
