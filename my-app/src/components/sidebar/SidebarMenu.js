import React from "react";
//Bài 103,104: Bài tập SidebarMenu phần 1 2
const SidebarMenu = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={` w-[300px] h-full bg-gray-300 
    fixed top-0 left-0 bottom-0 z-10 shadow-md 
    transition-all
     ${props.show ? "" : "-translate-x-full"}`}
    ></div>
  );
});

export default SidebarMenu;
