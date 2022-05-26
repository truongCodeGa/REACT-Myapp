import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";
// Bài 93,94: Viết custom hook useLinkNewTab phần 1,2
const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
        distinctio minus fugit debitis nesciunt facere obcaecati minima quae
        accusamus? Quis, repudiandae tenetur reiciendis culpa quidem aspernatur
        incidunt aperiam dolore{" "}
        <a
          href="https://www.google.com.vn/?hl=vi"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
        distinctio minus fugit debitis nesciunt facere obcaecati minima quae
        accusamus? Quis, repudiandae tenetur reiciendis culpa quidem aspernatur
        incidunt aperiam dolore{" "}
        <a className="underline" href="https://www.google.com.vn/?hl=vi">
          google
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
        distinctio minus fugit debitis nesciunt facere obcaecati minima quae
        accusamus? Quis, repudiandae tenetur reiciendis culpa quidem aspernatur
        incidunt aperiam dolore{" "}
        <a className="underline" href="https://www.google.com.vn/?hl=vi">
          google
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
