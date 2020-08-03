import React from "react";
import PropTypes from "prop-types";

const DashboardItem = (props) => {
  const { styler, imgPath, count, heading } = props;
  return (
    <div className={`item ${styler}`}>
      <h6>{heading}</h6>
      <div className="footer">
        <p>
          <strong>{count}</strong>
        </p>
        <p>
          <img src={imgPath} alt="" />
        </p>
      </div>
    </div>
  );
};

DashboardItem.propTypes = {
  styler: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired
};

export default DashboardItem;
