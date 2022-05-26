import React, { useState } from "react";
import TooltipAdvanced from "../tooltip/TooltipAdvanced";
import ModalAdvanced from "./ModalAdvanced";
import ModalBase from "./ModalBase";
//Bài 183: Tối ưu code Portal nâng cao phần 4
//Bài 184: Tối ưu code Portal nâng cao phần 5
//Bài 186: Tối ưu component Portal
const AppBackUpModal = () => {
  //khởi tạo useState cho ModalBase.js giá trị ban đầu = false
  const [openModalBase, setOpenModalBase] = useState(false);
  // tương tự bên modalAdvanced.js
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <button
        className="p-5 rounded-lg text-white text-center
  bg-blue-400"
        onClick={() => {
          setOpenModalBase(true);
        }}
      >
        Open modal base
      </button>
      <button
        className="p-5 rounded-lg text-white text-center
  bg-blue-400 ml-5"
        onClick={() => {
          setOpenModal(true); //set = true thì modal hiện ra
        }}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase} // visible = openmodalBase
        onClose={() => {
          setOpenModalBase(false); // đóng modal
        }}
        bodyClassName="w-full max-w-[320px] bg-white p-10 rounded-lg"
      >
        {/* render children ModalBase */}
        <TooltipAdvanced title="Tooltip2">This is tooltip2</TooltipAdvanced>
        <span className="ml-1"></span>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia soluta dignissimos corporis aperiam
        distinctio laudantium labore! Laudantium quo obcaecati molestiae alias,
        quia ullam! Veniam eius, saepe aspernatur alias impedit odio.
      </ModalBase>
      <ModalAdvanced
        visible={openModal} //  visible là openModal
        onClose={() => {
          setOpenModal(false); // đóng modal
        }}
        heading="WelCome Back"
        bodyClassName="w-full max-w-[320px] bg-white p-10 rounded-lg"
      >
        <div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email address
            </label>
            <input
              type="email"
              className="w-full text-sm leading-normal 
        p-4
        bg-[#e7ecf3] rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm leading-normal 
        p-4
        bg-[#e7ecf3] rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full max-w-[50%] p-3 font-medium text-base
     text-white bg-[#316bff] rounded-lg"
            >
              Sing in
            </button>
          </div>
        </div>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
};

export default AppBackUpModal;
