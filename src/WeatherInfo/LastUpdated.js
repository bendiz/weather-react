import React from "react";
import ReactTimeAgo from "react-time-ago";

function LastUpdated({ date }) {
  return (
    <aside class="date-time" id="date-time">
      <time datetime="2023-02-04">
        <ReactTimeAgo date={date} locale="en-US" />
      </time>
    </aside>
  );
}

export default LastUpdated;
