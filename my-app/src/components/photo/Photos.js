import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const getRandomPhotos = async (page) => {
  try {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=4`
    );
    return res.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNexPage] = useState(1);
  const handleLoadMore = useRef();
  handleLoadMore.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNexPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-[200px] rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleLoadMore.current}
          className="text-center bg-purple-500 px-8 py-4 rounded-lg text-white"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
