import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);
  const divRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        className="inline-block p-5 border 
        focus:border-blue-400 border-gray-500
        "
        placeholder="auto focus input"
      />
    </div>
  );
};

export default Input;
