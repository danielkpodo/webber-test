import React from "react";
import { FiMail } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

const Notifications = () => {
  return (
    <div className="notifications">
      <a href="#!">
        <FiMail />
      </a>
      <a href="#!">
        <FiBell />
      </a>
    </div>
  );
};

export default Notifications;
