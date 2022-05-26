//https://hn.algolia.com/api/v1/search?query=react
import axios from "axios";
import React, { useReducer, useRef, useState } from "react";
import lodash from "lodash";
/**Bài 78,79,80: Bài tập HackerNews API - Sử dụng useReducer
 */
const initialSate = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

//https://hn.algolia.com/api/v1/search?query=react
const hackerReducer = (state, action) => {
  switch (action.type) {
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    default:
      break;
  }
};
const HackerWithReducer = () => {
  const [state, dispatch] = useReducer(hackerReducer, initialSate);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    console.log("working");
    try {
      const res = await axios.get(state.url);
      console.log(res.data?.hits);
      dispatch({
        type: "SET_DATA",
        payload: res.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERR",
        payload: `the error happend ${err}`,
      });
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-4">
        <input
          type="text"
          defaultValue={state.query}
          onChange={(e) => {
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            });
          }}
          className=" py-2 px-3 text-lime-600
        border border-gray-200
        transition-all
        focus:border-blue-900
         block w-full rounded-md"
          placeholder="typing your keywork..."
        />
        <button
          onClick={() => {
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          disabled={state.loading}
          className="bg-blue-500
          p-3 rounded-md
         text-white font-semibold flex-shrink-0
         "
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fecthing
        </button>
      </div>
      {state.loading && (
        <div
          className="loading w-8 h-8 rounded-full 
        border-r-4 border-blue-500 border-4 
        border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      {!state.loading && state.errorMessage && (
        <div className="text-red-400 my-5">{state.errorMessage}</div>
      )}
      <div className="flex flex-wrap gap-3">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerWithReducer;
