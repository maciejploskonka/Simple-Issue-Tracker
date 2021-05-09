import React from "react";
import styled from "styled-components";
import { PendingActions } from "@styled-icons/material-outlined/PendingActions";
import { LockClock } from "@styled-icons/material-outlined/LockClock";

const PendingIcon = styled(PendingActions)`
  height: 24px;
  cursor: pointer;
  color: rgb(255, 209, 102);
  opacity: 0.75;
  transition: 0.2s opacity;

  &:hover {
    opacity: 1;
  }
`;

const ClosedIcon = styled(LockClock)`
  height: 24px;
  cursor: pointer;
  margin-left: 4px;
  color: rgb(239, 71, 111);
  opacity: 0.75;
  transition: 0.2s opacity;

  &:hover {
    opacity: 1;
  }
`;

const IssueItemButtons = (props) => {
  const stateChangeHandler = (e) => {
    props.onStateChange(e);
  };

  return (
    <>
      {props.state === "open" && (
        <PendingIcon
          onClick={stateChangeHandler}
          data-state="pending"
          title="set as pending"
        />
      )}
      {(props.state === "open" || props.state === "pending") && (
        <ClosedIcon
          onClick={stateChangeHandler}
          data-state="closed"
          title="set as closed"
        />
      )}
    </>
  );
};

export default IssueItemButtons;
