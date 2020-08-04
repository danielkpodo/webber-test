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
        <div className="container-fluid dash-area">
          <div className="row items-dash">
            <div className="col l3 mgt-enquiry">
              <h6 style={{ textAlign: "right", marginRight: "10px" }}>
                <BsArrowLeft /> Enquiry Management
              </h6>
            </div>
            <div className="col l3">
              <DashboardItem
                styler="received"
                heading="All Received"
                count={800}
                imgPath={threshold}
              />
            </div>
            <div className="col l3">
              <DashboardItem
                styler="enquiries"
                heading="New Enquiries"
                count={300}
                imgPath={enquiry}
              />
            </div>
            <div className="col l3">
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
    </div>
  );
};

export default Dashboard;
