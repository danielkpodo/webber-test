import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  return (
    <div className="calender z-depth-1">
      <h6>Calender</h6>
      <Calendar className="calender-view" />
    </div>
  );
};

export default Calender;
