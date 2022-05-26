import React, { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";
const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleShowDropdown = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div ref={nodeRef} className="relative w-full max-w-[400px]">
      <div
        className="p-5 border border-gray-200
        rounded-lg w-full cursor-pointer
      "
        onClick={handleShowDropdown}
      >
        selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};
const DropdownList = ({ coords }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="border border-gray-200 
      absolute top-full left-0 w-full bg-white
      rounded-lg"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">vuejs</div>
      <div className="p-5 cursor-pointer">react</div>
    </div>,
    document.querySelector("body")
  );
};
export default DropdownPortal;
//Bài 174: Xử lý overflow cho Dropdown với createPortal
