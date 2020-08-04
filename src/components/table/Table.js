import React from "react";
import TableHeader from "./TableHeader";

const Table = () => {
  return (
    <div
      className="enquiry-table z-depth-1 resizer"
      style={{ marginTop: "20px" }}
    >
      <TableHeader />
    </div>
  );
};

export default Table;
