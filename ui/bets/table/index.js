import { memo } from "react";
import { Table, TD, TH } from "./components";
import PropTypes from "prop-types";

const TableResults = ({ gamblers }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Result</TH>
          <TH>User</TH>
        </tr>
      </thead>
      <tbody>
        {gamblers.map((glamber) => (
          <tr key={glamber.user}>
            <TD>{glamber.result}</TD>
            <TD>{glamber.user}</TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableResults.propTypes = {
  gamblers: PropTypes.shape({
    result: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};

export default memo(TableResults);
