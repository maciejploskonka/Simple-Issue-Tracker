import React from "react";
import styled from "styled-components";

const FilterList = styled.ul`
`;

const FilterItem = styled.li`
`;

const FILTER_STATES = ["open", "pending", "closed", "all"];

const IssuesFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <FilterList>
      {FILTER_STATES.map((item) => (
        <FilterItem key={item}>
          <label htmlFor={item}>{item}</label>
          <input
            id={item}
            type="radio"
            name="state"
            value={item}
            onChange={filterChangeHandler}
          />
        </FilterItem>
      ))}
    </FilterList>
  );
};

export default IssuesFilter;
