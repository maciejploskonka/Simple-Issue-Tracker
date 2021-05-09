import React, { useState } from "react";
import styled from "styled-components";

const FilterList = styled.ul`
  display: flex;
`;

const FilterItem = styled.li`
  flex-basis: 25%;
  text-align: center;
  cursor: pointer;
  transition: 0.2s color;
  position: relative;
  color: ${(props) =>
    (props.activeItem === props.item && "rgb(255, 255, 255)") ||
    "rgba(255, 255, 255, 0.6)"};

  &:hover {
    color: rgb(255, 255, 255);

    input + label {
      &::after {
        transform: scaleX(1);
        transition: 0.2s transform;
      }
    }
  }

  input {
    display: none;
  }

  label {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    text-transform: uppercase;
    cursor: inherit;

    span:first-child {
      font-size: 22px;
      margin-bottom: 2px;
    }
  }

  input + label {
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      content: "";
      width: 100%;
      display: block;
      height: 4px;
      background: ${(props) =>
        (props.item === "all" && "rgb(0, 0, 0)") ||
        (props.item === "open" && "rgb(6, 214, 160)") ||
        (props.item === "pending" && "rgb(255, 209, 102)") ||
        (props.item === "closed" && "rgb(239, 71, 111)")};
      transform: scaleX(0);
      transform-origin: 0;
    }
  }

  input:checked + label {
    &::after {
      transform: scaleX(1);
      transition: 0.2s transform;
    }
  }
`;

const FILTER_STATES = ["all", "open", "pending", "closed"];

const IssuesFilter = (props) => {
  console.log(props.issues);
  const [activeItem, setActiveItem] = useState(props.selectedState);

  const issuesLength = {
    all: props.issues.length,
    open: props.issues.filter((el) => {
      return el.state === "open";
    }).length,
    pending: props.issues.filter((el) => {
      return el.state === "pending";
    }).length,
    closed: props.issues.filter((el) => {
      return el.state === "closed";
    }).length,
  };

  const filterChangeHandler = (e) => {
    const active = e.target.value;
    setActiveItem(active);
    props.onFilterChange(active);
  };

  return (
    <FilterList>
      {FILTER_STATES.map((item) => (
        <FilterItem key={item} item={item} activeItem={activeItem}>
          <input
            id={item}
            type="radio"
            name="state"
            value={item}
            onChange={filterChangeHandler}
            checked={props.selectedState === item}
          />
          <label htmlFor={item}>
            <span>{issuesLength[item]}</span>
            <span>{item}</span>
          </label>
        </FilterItem>
      ))}
    </FilterList>
  );
};

export default IssuesFilter;
