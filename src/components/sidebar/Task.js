import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

const Task = () => {
  return (
    <div className="task">
      <h6>Your Task</h6>
      <div className="content z-depth-1">
        <div className="duty">
          <p>Review The health core app with team</p>
          <p>
            <BsThreeDotsVertical />
          </p>
        </div>
        <div className="timeline">
          <p>
            <BsClock class="clock" /> 7 Dec, 2019 | 10:00 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
