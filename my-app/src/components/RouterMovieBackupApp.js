import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";
import BlogPageDetails from "./BlogPageDetails";
import Nav from "./Nav";
import ProfilePage from "./ProfilePage";

// Bài 202 -> 205: Tìm hiểu React Router cơ bản phần 1,2,3,4
const RouterMovieBackupApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 Page</>}></Route>
      </Routes>
    </div>
  );
};

export default RouterMovieBackupApp;
