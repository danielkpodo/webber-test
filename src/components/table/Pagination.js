import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="waves-effect">
        <a href="#!">
          <i className="material-icons pg-icon">chevron_left</i>
        </a>
      </li>
      <li className="waves-effect">
        <a href="#!">Prev</a>
      </li>
      <li className="waves-effect">
        <a href="#!">1</a>
      </li>
      <li className="active">
        <a href="#!">2</a>
      </li>
      <li className="waves-effect">
        <a href="#!">3</a>
      </li>
      <li className="waves-effect">
        <a href="#!">Next</a>
      </li>
      <li className="waves-effect">
        <a href="#!">
          <i className="material-icons pg-icon">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
