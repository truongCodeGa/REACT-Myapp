import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
];

const Nav = () => {
  return (
    <>
      <div
        className="p-5 bg-white flex shadow-lg
  items-center justify-center gap-x-5"
      >
        {ListLink.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-blue-300" : "")}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      {/* sử dụng oulet để render ra các component trong nav */}
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
