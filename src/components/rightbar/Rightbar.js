import React from "react";
import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jaseem Hamzz</b> and <b>3 Other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">Calicut</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">Ponnani</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Marital Status : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/1.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Jaseem Hamzz</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/2.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Asim Fayas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/3.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Jaseel Machan</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
