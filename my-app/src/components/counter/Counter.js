import React, { useEffect, useState } from "react";

const Counter = () => {
  //stale state
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     //callback : count ở đây sẽ lấy giá trị trước đó
  //     // (count mới sẽ dựa vào giá trị trước đó(giá trị khi chúng ta nhấn))
  //     // nếu ko đặt count thì sẽ luôn + 1 với giá trị count ban đầu = 0
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firtName: "tran",
    lastName: "truong",
  });
  useEffect(() => {
    // ko được set useState vao trong useEffect vi se bi vong lap vo han
    console.log(`from input ${info.firtName}`); // mỗi lần component re-render thì nó sẽ chạy vào đây
  }, [info.firtName]); // ko nen truyen object vao dependencies chi nen truyen chinh xac gia tri
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firtName"
        value={info.firtName}
        onChange={(e) => {
          setInfo({
            ...info,
            firtName: e.target.value,
          });
        }}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white rounded-lg"
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
