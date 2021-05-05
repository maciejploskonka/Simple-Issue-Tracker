import React from "react";

const IssuesFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by state</label>
        <select value={props.selectedState} onChange={filterChangeHandler}>
          <option value="all">all</option>
          <option value="open">open</option>
          <option value="pending">pending</option>
          <option value="closed">closed</option>
        </select>
      </div>
    </div>
  );
};

export default IssuesFilter;
