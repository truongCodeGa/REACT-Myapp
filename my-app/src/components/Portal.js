import React, { useEffect } from "react";
import { createPortal } from "react-dom";
//Bài 180: Tối ưu code Portal nâng cao phần 1
//Bài 181: Tối ưu code Portal nâng cao phần 2
//Bài 184: Tối ưu code Portal nâng cao phần 5
import PropTypes from "prop-types";
const createPortalWrapper = () => {
  const element = document.createElement("div"); //tạo ra div
  element.id = "portal-wrapper"; //trong div co id = "portal-wrapper"
  return element; //trả về cái div đó
};
// đưa func vào biến nhưng ko render ra ngoài được
const portalWrapperElm = createPortalWrapper();

const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  // render portalWrapperElm bằng useEffect dùng chức năng side-effect
  useEffect(() => {
    document.body.appendChild(portalWrapperElm); //render portal ra bên ngoài
  }, []);
  const renderContent = (
    //containerClassName: class bao ngoài cùng portal
    <div className={containerClassName} style={containerStyle}>
      {/* tiếp đến là overlay: lớp phủ mờ */}
      {overlay && (
        <div
          className="overplay absolute inset-0 bg-black 
      bg-opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {/* children ở đây chúng ta có thể làm chức năng gì đó bên trong này  */}
        {children}
      </div>
    </div>
  );
  //dùng createPortal từ ReactDom để render content ra bên ngoài
  // và nó sẽ nằm bên trong div có id = "portal-wrapper"
  return createPortal(renderContent, portalWrapperElm);
  //   return <div></div>;
};
//tất cả props truyền vào sẽ dùng PropTypes để check kiểu dữ liệu
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};
export default Portal;
