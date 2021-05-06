import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 40px 0px;
  padding: 20px 20px 10px;
  border-radius: 3px;
  border-left: 3px solid;
  border-left-color: ${(props) =>
    (props.state === "open" && "rgb(6, 214, 160)") ||
    (props.state === "pending" && "rgb(255, 209, 102)") ||
    (props.state === "closed" && "rgb(239, 71, 111)")};
  transition: 0.2s border-left-color;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const ListItemTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgb(31, 31, 31);
`;

const ListItemDescription = styled.span`
  font-size: 14px;
  color: rgb(71, 71, 71);
`;

const ListItemId = styled.small`
  margin-top: 20px;
  display: inline-block;
  color: rgb(133, 133, 133);
  font-size: 10px;
`;

const IssueItem = (props) => {
  const { title, description, state, id } = props.issue;

  const stateChangeHandler = (e) => {
    const issue = {
      ...props.issue,
      state: e.target.dataset.state,
    };
    props.onStateChange(issue);
  };

  return (
    <ListItem state={state}>
      <ListItemTitle>{title}</ListItemTitle>
      {state === "open" && (
        <button onClick={stateChangeHandler} data-state="pending">
          pending
        </button>
      )}
      {(state === "open" || state === "pending") && (
        <button onClick={stateChangeHandler} data-state="closed">
          closed
        </button>
      )}
      <ListItemDescription>{description}</ListItemDescription>
      <ListItemId>id: {id}</ListItemId>
    </ListItem>
  );
};

export default IssueItem;
