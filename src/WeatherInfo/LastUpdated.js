import React from "react";
import ReactTimeAgo from "react-time-ago";

function LastUpdated({ date }) {
  /**
   * Displays a counter for when the user last updated the page with react-time-ago library
   *
   * @param {Object} date - The current date - passed from Search.
   * @returns {JSX.Element} - Returns the JSX representation of the time since last updated.
   */
  return (
    <aside class="date-time" id="date-time">
      <time datetime="2023-02-04">
        <ReactTimeAgo date={date} locale="en-US" />
      </time>
    </aside>
  );
}

export default LastUpdated;
