import React from "react";
import ReactTimeAgo from "react-time-ago";
import PropTypes from "prop-types";

function LastUpdated({ date }) {
  /**
   * Displays a counter for when the user last updated the page with react-time-ago library
   *
   * @param {Object} date - The current date - passed from Search.
   * @returns {JSX.Element} - Returns the JSX representation of the time since last updated.
   */
  return (
    <aside className="LastUpdated date-time" id="date-time">
      <time>
        <ReactTimeAgo date={date} locale="en-US" />
      </time>
    </aside>
  );
}
 LastUpdated.propTypes = {
    date: PropTypes.object.isRequired,
  };

export default LastUpdated;
