import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="dashboard-content z-depth-2">
      <div className="row">
        <div className="container">
          <div className="row items">
            <div className="col 3">Enquiries</div>
            <div className="col 3">All Received</div>
            <div className="col 3">New Enquiries</div>
            <div className="col 3">Active Employees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
