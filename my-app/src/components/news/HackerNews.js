//https://hn.algolia.com/api/v1/search?query=react
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";
/**Bài 72: Bài tập HackerNews API phần 1
 * kết nối api hackernews
 * bài 73:Bài tập HackerNews API phần 2
 * - làm chức năng tìm kiếm
 * bài 74:Bài tập HackerNews API phần 3
 * - làm chức năng loadding dữ liệu
 * bài 75:Bài tập HackerNews API phần 4
 * - Xử lý lỗi và đưa ra bên ngoài giao diện
 * Bài 76: Tối ưu giao diện HackerNews API
 * Bài 77: Bài tập HackerNews API - Fetching dữ liệu với button
 * Bài 97,98: Xử lý unmounted component với ref phần 1,2
 */

//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const isMouted = useRef(true);
  useEffect(() => {
    return () => {
      // unmouted component
      isMouted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log("handleFetchres ~ res", res.data);
      setTimeout(() => {
        if (isMouted.current) {
          setHits(res.data?.hits || []);
          setLoading(false);
        }
      }, 2000);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error hapend ${err}`);
    }
  };
  // muốn dùng debounce phải npm install lodash
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-4">
        <input
          type="text"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" py-2 px-3 text-lime-600
        border border-gray-200
        transition-all
        focus:border-blue-900
         block w-full rounded-md"
          placeholder="typing your keywork..."
        />
        <button
          onClick={() => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
          className="bg-blue-500
          p-3 rounded-md
         text-white font-semibold flex-shrink-0"
        >
          Fecthing
        </button>
      </div>
      {loading && (
        <div
          className="loading w-8 h-8 rounded-full 
        border-r-4 border-blue-500 border-4 
        border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      {!loading && errorMessage && (
        <div className="text-red-400 my-5">{errorMessage}</div>
      )}
      <div className="flex flex-wrap gap-3">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-2 bg-gray-100 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
