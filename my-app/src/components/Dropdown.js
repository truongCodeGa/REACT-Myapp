import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const handleShowDropdown = () => {
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
      {show && (
        <div
          className="border border-gray-200 
      absolute top-full left-0 w-full bg-white
      rounded-lg"
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">vuejs</div>
          <div className="p-5 cursor-pointer">react</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
