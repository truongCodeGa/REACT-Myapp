import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import SidebarMenu from "./SidebarMenu";

const WrapSidebar = () => {
  const { show, setShow, nodeRef } = useClickOutSide("span");
  return (
    <div>
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 
      bg-green-600 text-white cursor-pointer
      rounded-md"
      >
        show menu
      </span>{" "}
      <SidebarMenu ref={nodeRef} show={show}></SidebarMenu>
    </div>
  );
};

export default WrapSidebar;
