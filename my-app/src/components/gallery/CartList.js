import React from "react";
import { useGallery } from "../../context/gallery-context";
//Bài 198: Thực hành GalleryContext - removeFromCart
const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();
  return (
    <div
      className={`${
        cartItems.length > 0
          ? "py-5 px-5 bg-zinc-200 shadow-lg shadow-orange-400 w-ful max-w-[220px] rounded-md mx-auto"
          : ""
      }`}
    >
      {cartItems.length > 0 &&
        cartItems.map((item, index) => {
          return (
            <div
              className="flex gap-x-5 justify-between items-center mt-2"
              key={index}
            >
              <img
                src={item.url}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <button
                className="rounded-lg bg-slate-500 p-2 
              text-sm text-white"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
