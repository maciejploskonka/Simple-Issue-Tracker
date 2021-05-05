import React from "react";

const IssueItem = (props) => {
  const { title, description, state, id } = props.issue;

  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{state}</span>
      <span>{id}</span>
    </li>
  );
};

export default IssueItem;
