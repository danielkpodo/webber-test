import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import threshold from "./assets/images/profit.svg";
import enquiry from "./assets/images/activity.svg";
import employee from "./assets/images/new.svg";
import DashboardItem from "./DashboardItem";

const Dashboard = () => {
  return (
    <div className="dashboard-content z-depth-1 resizer">
      <div className="row">
        <div className="items-dash">
          <div className="col l3 m6 s12 dash-spacer mgt-enquiry">
            <h6 style={{ textAlign: "right", marginRight: "10px" }}>
              <BsArrowLeft /> Enquiry Management
            </h6>
          </div>
          <div className="col l3 m6 s12 dash-spacer">
            <DashboardItem
              styler="received"
              heading="All Received"
              count={800}
              imgPath={threshold}
            />
          </div>
          <div className="col l3 m6 s12 dash-spacer">
            <DashboardItem
              styler="enquiries"
              heading="New Enquiries"
              count={300}
              imgPath={enquiry}
            />
          </div>
          <div className="col l3 m6 s12 dash-spacer">
            <DashboardItem
              styler="employees"
              heading="Active Employees"
              count={360}
              imgPath={employee}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
