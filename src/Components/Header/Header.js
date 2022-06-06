import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>****Wellcome to my fancy website****</h1>
      <nav>
        {/* <CustomLink to="/">Home </CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink> */}
        <Link to="/">Home </Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
