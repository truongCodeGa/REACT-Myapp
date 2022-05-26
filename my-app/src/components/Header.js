import { cleanup } from "@testing-library/react";
import React from "react";
//Bài 70: Sử dụng event listener trong useEffect như thế nào ?
const Header = () => {
  React.useEffect(() => {
    const handleFixedHeader = () => {
      console.log("fixed");
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader); // su kien scroll trong reacjs
    //cleanup
    //const demo ;
    //demo.addEventListener("change",handleChange);
    return () => {
      // demo.removeEventListener("change",handleChange);
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
