import React from "react";
import { useSearchParams } from "react-router-dom";
//Bài 205: Tìm hiểu React Router cơ bản phần 4
const BlogPage = () => {
  // console.log(useSearchParams());
  const [searchParams, setSeacrhParams] = useSearchParams();
  console.log("BlogPage", searchParams.get("search"));
  React.useEffect(() => {
    setSeacrhParams({ search: "evondev" });
  }, []);

  return <div> BlogPage</div>;
};

export default BlogPage;
