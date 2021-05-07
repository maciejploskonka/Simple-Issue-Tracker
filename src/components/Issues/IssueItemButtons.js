import React, { useState } from "react";
import styled from "styled-components";
import { PendingActions } from "@styled-icons/material-outlined/PendingActions";
import { LockClock } from "@styled-icons/material-outlined/LockClock";

const Wrapper = styled.div`
  color: rgb(31, 31, 31);
`;

const PendingIcon = styled(PendingActions)`
  height: 24px;
  cursor: pointer;
  color: rgba(255, 209, 102, 0.75);
  transition: 0.2s color;

  &:hover {
    color: rgba(255, 209, 102, 1);
  }
`;
const ClosedIcon = styled(LockClock)`
  height: 24px;
  margin-left: 4px;
  cursor: pointer;
  color: rgba(239, 71, 111, 0.75);
  transition: 0.2s color;

  &:hover {
    color: rgba(239, 71, 111, 1);
  }
`;

const IssueItemButtons = (props) => {
  return (
    <Wrapper>
      {props.state === "open" && (
        <PendingIcon
          onClick={props.onStateChange}
          data-state="pending"
          title="set as pending"
        />
      )}
      {(props.state === "open" || props.state === "pending") && (
        <ClosedIcon
          onClick={props.onStateChange}
          data-state="closed"
          title="set as closed"
        />
      )}
    </Wrapper>
  );
};

export default IssueItemButtons;
