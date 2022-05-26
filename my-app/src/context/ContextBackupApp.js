import React, { Fragment } from "react";
import CartList from "../components/gallery/CartList";
import PhotosList from "../components/gallery/PhotosList";
import HeaderMain from "../components/HeaderMain";
import { AuthProvider } from "./auth-context";
import { CountProvider, useCount } from "./countContext";
import { GalleryProvider } from "./gallery-context";
//Bài 190,191: Thực hành CountContext phần 1,2,

const CountDisplay = () => {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
};
const Counter = () => {
  // const setCount = () => {};
  const [, setCount] = useCount();
  const increment = () => setCount((count) => count + 1);
  return (
    <button
      onClick={increment}
      className="p-4 bg-purple-400
     text-white
      rounded-md"
    >
      Increment count
    </button>
  );
};
const ContextBackupApp = () => {
  return (
    <Fragment>
      {/* <div className="flex items-center justify-center p-5 gap-x-5">
        {/* để sử dụng context thì countDisplay và
       counter phải nằm trong countProvider 
       thì 2 cái kia mới truy xuất được giá trị trong countProvider
       */}
      {/* <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotosList></PhotosList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default ContextBackupApp;
