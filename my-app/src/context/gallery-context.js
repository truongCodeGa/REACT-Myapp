import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
//Bài 194: Thực hành GalleryContext - Setup
//Bài 200: Thực hành Gallery Context - usehooks
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1635652430656-27f9a95e5b72?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1652487346667-b89061ca7b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1652820862882-7bac8e92c668?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isLike: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600489000300-e590b381ce48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1652794878130-d7274e14e244?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500",
    isLike: false,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1616060373717-e67ac26f19b1?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
    isLike: false,
  },
];

const GalleryContext = createContext();

const GalleryProvider = (props) => {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: sotredCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(sotredCart);
  const [isLikeList, setIsLikeList] = useState([]);

  const toggleIsLike = (photosId) => {
    const updatedArray = photos.map((photo) => {
      //map photos
      // điều kiện duyệt nếu có id của photo == photosId
      if (photo.id === photosId) {
        //thì trả về mảng mới là photo có isLike = !photo,isLike
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  };

  const addToCard = (newItem) => {
    // cập nhật lại state giỏ hàng {cartItems}
    setCartItems((prevItems) => {
      // kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
      const isExited = prevItems.some((item) => item.id === newItem.id);
      // console.log(isExited);
      // nếu tồn tại thì trả về danh sách trước đó
      if (isExited) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // chưa tồn tại thì thêm vào giỏ hàng
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  };
  const removeFromCart = (photoId) => {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      setStoredCart(result);
      return result;
    });
  };
  const value = {
    photos,
    cartItems,
    isLikeList,
    setPhotos,
    setCartItems,
    setIsLikeList,
    toggleIsLike,
    addToCard,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
};

export { useGallery, GalleryProvider };
