import React from "react";

const Friend = (props) => {
  const { name, username } = props.friend;

  return (
    <div>
      <h1>Name : {name}</h1>
      <button>{username}</button>
    </div>
  );
};

export default Friend;
