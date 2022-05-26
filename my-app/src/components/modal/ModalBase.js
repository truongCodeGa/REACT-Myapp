import React, { useState } from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";
//Bài 181: Tối ưu code Portal nâng cao phần 2
//Bài 182: Tối ưu code Portal nâng cao phần 3
//visible, onClose, children, bodyClassName
//visible: ẩn hiện
//onClose: click vào => đóng
//children: nội dung bên trong (truyền vào chữ hay gì đó)
const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} classNames="zoom" unmountOnExit timeout={150}>
        {/* status: dùng render props trong CSSTransition  
        dùng để check cái visible cho portal với điều kiện là
        status !== "exited" (exited: thoát) 
        !== return true nếu ko thì là fasle

        + true: visible của portal sẽ hiện ra 
        */}
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose} // click vào overlay sẽ đóng
            containerClassName="fixed inset-0 z-[98] flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`relative z-10 content  ${bodyClassName}`}
          >
            {children}
            {/* sử dụng modalBase bên appBackupModal.js */}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};
// const ComponentModalBase = () => {

//   return (
//     <div className="p-5">
//       <button
//         className="p-5 rounded-lg text-white text-center
//       bg-blue-400"
//         onClick={() => {
//           setOpenModalBase(true);
//         }}
//       >
//         Open modal base
//       </button>
//       <ModalBase
//         visible={openModalBase}
//         onClose={() => {
//           setOpenModalBase(false);
//         }}
//       >
//         <div className="bg-white p-10 w-full max-w-[320px] mx-auto rounded-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
//           soluta dignissimos corporis aperiam distinctio laudantium labore!
//           Laudantium quo obcaecati molestiae alias, quia ullam! Veniam eius,
//           saepe aspernatur alias impedit odio.
//         </div>
//       </ModalBase>
//       <ModalAdvanced visible={true}>
//         <div
//           className="modal-content bg-white
//       max-w-[482px] w-full
//        relative z-10 p-10 rounded-lg"
//         >
//           <span
//             className="absolute top-0 right-0 flex items-center
//         w-10 h-10 rounded-full bg-white p-1 justify-center
//         cursor-pointer translate-x-2/4 -translate-y-2/4"
//           >
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 14 14"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
//                 fill="#84878B"
//               />
//             </svg>
//           </span>
//           <h2 className="text-4xl font-medium text-center text-black">
//             Welcome back
//           </h2>
//           <div className="flex flex-col gap-3 mb-5">
//             <label htmlFor="email" className="text-sm cursor-pointer">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="w-full text-sm leading-normal
//             p-4
//             bg-[#e7ecf3] rounded-lg"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="flex flex-col gap-3 mb-5">
//             <label htmlFor="password" className="text-sm cursor-pointer">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full text-sm leading-normal
//             p-4
//             bg-[#e7ecf3] rounded-lg"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             className="w-full p-4 font-semibold text-base
//          text-white bg-[#316bff] rounded-lg"
//           >
//             Sing in
//           </button>
//         </div>
//       </ModalAdvanced>
//     </div>
//   );
// };
export default ModalBase;
