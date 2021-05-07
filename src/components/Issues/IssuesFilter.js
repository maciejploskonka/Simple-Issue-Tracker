import React, { useState } from "react";
import styled from "styled-components";

const FilterList = styled.ul`
  display: flex;
`;

const FilterItem = styled.li`
  flex-basis: 25%;
  text-align: center;
  cursor: pointer;

  input {
    display: none;
  }

  label {
    display: inline-block;
    width: 100%;
    padding: 20px 0;
    font-size: 14px;
    text-transform: uppercase;
    cursor: inherit;
  }

  input:checked + label {
    border-bottom: 4px solid;
    border-bottom-color: ${(props) =>
      (props.activeItem === "all" && "rgb(0, 0, 0)") ||
      (props.activeItem === "open" && "rgb(6, 214, 160)") ||
      (props.activeItem === "pending" && "rgb(255, 209, 102)") ||
      (props.activeItem === "closed" && "rgb(239, 71, 111)")};
  }
`;

const FILTER_STATES = ["all", "open", "pending", "closed"];

const IssuesFilter = (props) => {
  const [activeItem, setActiveItem] = useState(props.selectedState);

  const filterChangeHandler = (e) => {
    const active = e.target.value;
    setActiveItem(active);
    props.onFilterChange(active);
  };

  return (
    <FilterList>
      {FILTER_STATES.map((item) => (
        <FilterItem key={item} activeItem={activeItem}>
          <input
            id={item}
            type="radio"
            name="state"
            value={item}
            onChange={filterChangeHandler}
            checked={props.selectedState === item}
          />
          <label htmlFor={item}>{item}</label>
        </FilterItem>
      ))}
    </FilterList>
  );
};

export default IssuesFilter;
