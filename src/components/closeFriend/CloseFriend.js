import React from "react";
import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFriendListItem">
      <img
        src={user.profilePicture}
        alt="PersonImg"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
