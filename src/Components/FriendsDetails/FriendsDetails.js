import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendsDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>This is Details: {friendId}</h1>
      <h1>{friend.name}</h1>
      <h4>Email: {friend.email}</h4>
      <h3>Website: {friend.website}</h3>
      <p>
        <small>City : {friend.address?.city}</small>
      </p>
      <p>
        <small>Lat : {friend.address?.geo.lat}</small>
      </p>
      <p>
        <small>Lng : {friend.address?.geo.lng}</small>
      </p>
    </div>
  );
};

export default FriendsDetails;
