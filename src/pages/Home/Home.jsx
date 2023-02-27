import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const getUserFullname = ({ name }) =>
    `${name.title} ${name.first} ${name.last}`;

  if (user) {
    return <div>Wellcome {getUserFullname(user)}!</div>;
  }

  return <Link to={"/login"}>Login</Link>;
};

export default Home;
