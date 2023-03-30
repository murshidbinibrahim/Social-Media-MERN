import React from "react";
import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
  Event,
} from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show more </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/devMK.jpeg"
              alt="PersonImg"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Murshid Bin Ibrahim</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
