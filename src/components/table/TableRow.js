import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TableRow = (props) => {
  const { item, date, service, phone, emails, name, messages } = props.person;
  return (
    <Fragment>
      <tr>
        <td>{item}</td>
        <td>{date}</td>
        <td>{service}</td>
        <td>{phone}</td>
        <td>{emails}</td>
        <td>{name}</td>
        <td>{messages}</td>
      </tr>
    </Fragment>
  );
};

TableRow.propTypes = {
  person: PropTypes.object.isRequired
};

export default TableRow;
