import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "@styled-icons/boxicons-regular/PlusCircle";

import AddIssueForm from "../Issues/AddIssueForm";
import IssuesFilter from "../Issues/IssuesFilter";
import IssuesList from "../Issues/IssuesList";

import { useModal } from "../Modal/useModal";

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 600px;
  min-height: 600px;
  background: rgb(255, 255, 255);
`;

const MainHeader = styled.header`
  position: relative;
  color: rgb(255, 255, 255);
  background: rgb(17, 138, 178);
`;

const Title = styled.h1`
  margin: 0;
  padding: 16px 0;
  text-align: center;
  font-size: 24px;
`;

const AddButton = styled(PlusCircle)`
  height: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: 0.2s color;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const MOCKED_ISSUES = [
  {
    id: "8706ad4b-21a8-451b-b691-ecdfe4e39372",
    title: "issue one title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus id ligula ultricies commodo. Donec lectus tellus, aliquet vel diam a, congue porta ex.",
    state: "open",
  },
  {
    id: "16312146-2154-41d8-86bc-eb5dad3b314b",
    title: "issue two title",
    description:
      "Integer hendrerit sed odio et vulputate. Aliquam at leo in risus aliquet ultrices sed eget eros. Curabitur sit amet lacus et libero suscipit imperdiet quis quis orci.",
    state: "closed",
  },
  {
    id: "b9116e6b-e1cf-418f-bc4b-376df86cb2eb",
    title: "issue three title",
    description:
      "Quisque ullamcorper felis metus. Curabitur rhoncus a nibh at condimentum. Fusce non dictum quam. Vivamus convallis elit et enim ultricies placerat.",
    state: "pending",
  },
];

const Main = () => {
  const [issues, setIssues] = useState(MOCKED_ISSUES);
  const [filteredState, setFilteredState] = useState("all");
  const { showModal, hideModal, RenderModal } = useModal();

  const addIssueHandler = (issue) => {
    const newIssue = {
      ...issue,
      id: uuidv4(),
      state: "open",
    };
    setIssues((prevIssues) => {
      return [newIssue, ...prevIssues];
    });
    hideModal();
  };

  const filterChangeHandler = (selectedState) => {
    setFilteredState(selectedState);
  };

  const stateChangeHandler = (issue) => {
    const newList = issues.map((item) => {
      if (item.id === issue.id) {
        const updatedItem = {
          ...item,
          state: issue.state,
        };
        return updatedItem;
      }
      return item;
    });

    setIssues(newList);
  };

  const filteredIssuesList = issues.filter((issue) => {
    let matchedIssue;
    if (filteredState === "all") {
      matchedIssue = issue;
    } else {
      matchedIssue = issue.state === filteredState;
    }
    return matchedIssue;
  });

  return (
    <MainWrapper>
      <MainHeader>
        <Title>Issue Tracker</Title>
        <AddButton onClick={showModal} />
        <RenderModal>
          <AddIssueForm onAddIssue={addIssueHandler} />
        </RenderModal>
        <IssuesFilter
          selectedState={filteredState}
          onFilterChange={filterChangeHandler}
          issues={issues}
        />
      </MainHeader>
      <IssuesList
        issues={filteredIssuesList}
        onStateChange={stateChangeHandler}
      />
    </MainWrapper>
  );
};

export default Main;
