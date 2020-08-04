import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import persons from "./MOCK_DATA.json";
import Pagination from "./Pagination";

const Table = () => {
  const personnels = persons.map((person, index) => (
    <TableRow person={person} key={index} />
  ));
  return (
    <div
      className="enquiry-table z-depth-1 resizer"
      style={{ marginTop: "20px" }}
    >
      <TableHeader />
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th># Item</th>
            <th>Date</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Emails</th>
            <th>Name</th>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>{personnels}</tbody>
      </table>
      <div className="row">
        <div className="col s12 m12 l12 pager">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Table;
