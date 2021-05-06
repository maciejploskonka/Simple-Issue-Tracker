import React from "react";
import styled from "styled-components";

import IssueItem from "./IssueItem";

const List = styled.ul`
  padding: 35px 20px;
`;

const IssuesList = (props) => {
  return (
    <List>
      {props.issues.map((issue) => (
        <IssueItem
          issue={issue}
          key={issue.id}
          onStateChange={props.onStateChange}
        />
      ))}
    </List>
  );
};

export default IssuesList;
