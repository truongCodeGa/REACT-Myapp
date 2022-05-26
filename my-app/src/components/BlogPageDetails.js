import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  //fetching.com?slug=hello-word
  console.log(useParams());
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate(); //  điều hướng
  return (
    <div>
      Blog Page Details
      <button
        onClick={() => navigate("/blog")}
        className="p-5 rounded-md text-yellow-200 bg-slate-600"
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
