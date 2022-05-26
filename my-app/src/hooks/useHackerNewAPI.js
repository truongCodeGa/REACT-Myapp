import axios from "axios";
import { useEffect, useRef, useState } from "react";
// Bài 99,100,101,: Tối ưu bài tập HackerNewsAPI với custom hook phần 1,2,3
export default function useHackerNewAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);
  const isMouted = useRef(true);
  useEffect(() => {
    isMouted.current = true;
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

      if (isMouted.current) {
        setData(res.data || []);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error hapend ${err}`);
    }
  };
  // muốn dùng debounce phải npm install lodash
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    errorMessage,
  };
}
