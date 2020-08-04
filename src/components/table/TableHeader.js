import React from "react";

const TableHeader = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m2 l2">
          <p>All Enquiries</p>
        </div>
        <div className="col m10 l10 header-btns">
          <a
            href="#!"
            className="waves-effect waves-light btn btn-small"
            style={{ background: "#9c9c9c" }}
          >
            Print History
          </a>
          &nbsp;&nbsp;
          <a
            href="#!"
            className="waves-effect waves-light btn btn-small"
            style={{ background: "#455eee" }}
          >
            Export File
          </a>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
