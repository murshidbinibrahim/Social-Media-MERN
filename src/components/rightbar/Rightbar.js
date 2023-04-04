import React from "react";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jaseem Hamzz</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
