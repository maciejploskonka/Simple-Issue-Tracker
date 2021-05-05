import React, { useState } from "react";

import AddIssueForm from "../Issues/AddIssueForm";
import IssuesFilter from "../Issues/IssuesFilter";
import IssuesList from "../Issues/IssuesList";

const MOCKED_ISSUES = [
  {
    id: "1",
    title: "issue one title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus id ligula ultricies commodo. Donec lectus tellus, aliquet vel diam a, congue porta ex. Aenean sit amet varius libero. Morbi vel lacus dolor. Nam mattis aliquam enim, tincidunt elementum justo imperdiet eu. Sed vitae maximus dolor. Cras laoreet scelerisque venenatis. Nam sagittis nec lacus nec fringilla. Quisque sit amet lectus eget enim placerat mattis id id ligula. Ut vel mattis nisi. Quisque sed egestas libero, in mollis velit. Vivamus eleifend neque dapibus convallis cursus. Praesent quam lorem, dapibus eu ultricies id, aliquam nec nisi.",
    state: "open",
  },
  {
    id: "2",
    title: "issue two title",
    description:
      "Integer hendrerit sed odio et vulputate. Aliquam at leo in risus aliquet ultrices sed eget eros. Curabitur sit amet lacus et libero suscipit imperdiet quis quis orci. Sed ut interdum magna, id feugiat elit. Maecenas porttitor felis nunc, vel efficitur nibh dapibus vitae. In ornare nibh in eros porta sagittis. Nullam ac magna mi. Maecenas semper porta purus, rutrum interdum sem. Nam euismod hendrerit fringilla. Suspendisse quis finibus nulla, vel condimentum erat.",
    state: "closed",
  },
  {
    id: "3",
    title: "issue three title",
    description:
      "Quisque ullamcorper felis metus. Curabitur rhoncus a nibh at condimentum. Fusce non dictum quam. Vivamus convallis elit et enim ultricies placerat. Morbi tincidunt, augue sit amet laoreet consectetur, massa ligula gravida nisl, quis convallis quam diam et nulla. Pellentesque facilisis, justo ac fermentum mattis, erat nisl lacinia velit, ac scelerisque purus elit sed lacus. Etiam sollicitudin metus nec nisl maximus suscipit. Aenean rhoncus ante eros, vel sagittis purus pellentesque tincidunt.",
    state: "pending",
  },
];

const Main = () => {
  const [issues, setIssues] = useState(MOCKED_ISSUES);
  const [filteredState, setFilteredState] = useState("all");

  const addIssueHandler = (issue) => {
    console.log(issue);
    const newIssue = {
      ...issue,
      id: Math.random(), //can use uuid here
      state: "open",
    };
    setIssues((prevIssues) => {
      return [newIssue, ...prevIssues];
    });
  };

  const filterChangeHandler = (selectedState) => {
    setFilteredState(selectedState);
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
    <main>
      <AddIssueForm onAddIssue={addIssueHandler} />
      <IssuesFilter
        selectedState={filteredState}
        onFilterChange={filterChangeHandler}
      />
      <IssuesList issues={filteredIssuesList} />
    </main>
  );
};

export default Main;
