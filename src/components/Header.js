import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import menu from "../components/assets/images/Menu Icon.svg";
import profile from "../components/assets/images/yuna.jpg";

const Header = () => {
  return (
    <div className="row main-header">
      <div className="col s4 left-header">
        <div className="row">
          <div className="col s6">
            <p className="letter z-depth-2 circle ">b</p>
          </div>
          <div className="col s6">
            <div className="logout">
              <p>
                <BsArrowLeft />
              </p>
              &nbsp; &nbsp;
              <p className="log">
                <a href="#!">Logout</a>
              </p>
            </div>
            <div className="menu">
              <div>
                <img src={menu} alt="menu icon" style={{ maxWidth: "20px" }} />
              </div>
              <div className="main-menu">
                Menu / <span className="dashboard">Dashboard</span>{" "}
                <FiChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s8 right-header">
        <div className="profile-header">
          <div></div>
          <div className="profile">
            <img
              src={profile}
              alt="profile"
              className="profile-img circle responsive-img"
            />
          </div>
        </div>
        <div className="user-tasks">
          <div className="row navlinks">
            <div className="col s6 manager">
              <a href="#!">Visitor Manager</a>
              <a href="#!">Last visit 5mins ago</a>
            </div>
            <div className="col s3 nav-item">
              <a href="#!">Schedule Meeting</a>
            </div>
            <div className="col s3 nav-item">
              <a href="#!">Enquiry Management</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
