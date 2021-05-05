import React from "react";

import IssueItem from "./IssueItem";

const IssuesList = (props) => {
  return (
    <ul>
      {props.issues.map((issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ul>
  );
};

export default IssuesList;
