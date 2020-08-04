import React, { useEffect } from "react";
import M from "materialize-css";

const Form = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="form-section z-depth-1 resizer">
      <div className="row">
        <div className="col l4 form">
          <div className="label">
            <p>Name</p>
          </div>
          <div className="field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="text-field"
              style={{ height: "40px", width: "220px" }}
            />
          </div>
        </div>
        <div className="col l4 form">
          <div className="label">
            <p>Email</p>
          </div>
          <div className="field">
            <input
              type="text"
              name="email"
              id="email"
              className="text-field"
              style={{ height: "40px", width: "220px" }}
            />
          </div>
        </div>
        <div className="col l4 form">
          <div className="label">
            <p>Detail</p>
          </div>
          <div className="field">
            <textarea
              name="detail"
              id="detail"
              cols="30"
              rows="50"
              className="materialize-textarea text-field"
              style={{ height: "65px" }}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col l4 form">
          <div className="label">
            <p>Services</p>
          </div>
          <div className="field">
            <select style={{ height: "40px", width: "220px" }}>
              <option value="nothing">choose option</option>
              <option value="1">Graphic design</option>
              <option value="2">Digital marketing</option>
              <option value="3">Web development</option>
            </select>
          </div>
        </div>
        <div className="col l4 form">
          <div className="label">
            <p>Phone</p>
          </div>
          <div className="field">
            <input
              maxLength={10}
              type="number"
              name="phone"
              id="phone"
              className="text-field"
              style={{ height: "40px", width: "220px" }}
            />
          </div>
        </div>
        <div className="col l4">
          <div className="enquiry-btn">
            <a href="#!" type="button" className="waves-effect waves-light btn">
              Add Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
