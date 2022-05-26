import { useEffect, useRef, useState } from "react";
//Bài 95,96: Viết custom hook useHover phần 1,2
export default function useHover() {
  //mouseover
  //mouseout
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  function handleMouseOver() {
    setHovered(true);
    console.log("da hover");
  }
  function handleMouseOut() {
    setHovered(false);
  }
  const dom = nodeRef.current;
  useEffect(() => {
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      if (dom) {
        dom.removeEventListener("mouseover", handleMouseOver);
        dom.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [dom]);
  return {
    hovered,
    nodeRef,
  };
}
