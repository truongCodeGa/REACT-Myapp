import React, { useEffect, useRef, useState } from "react";
// Bài 87,88: Bài tập Textarea Resize phần 1,2
const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    console.log(e.target.value);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight("auto");
    setText(e.target.value);
  };
  useEffect(() => {
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      //   style={{
      //     minHeight: parentHeight,
      //   }}
    >
      <textarea
        className="transition-all overflow-hidden w-full
       max-w-[400px] p-5 border rounded-md
       border-gray-300 resize-none
       focus:border-blue-400
       leading-normal"
        placeholder="please enter you content...."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
