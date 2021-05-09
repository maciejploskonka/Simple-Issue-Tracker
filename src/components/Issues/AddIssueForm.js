import React, { useState } from "react";
import styled from "styled-components";

const AddForm = styled.form`
  color: rgb(255, 255, 255);
  display: flex;
  flex-wrap: wrap;
`;

const AddFormControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 4px;
    background: transparent;
    transition: 0.2s border;
    color: rgb(255, 255, 255);
    font-family: inherit;

    &:hover {
      border-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const AddButton = styled.button`
  color: inherit;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid rgb(255, 255, 255);
  margin-left: auto;
  transition: 0.2s color, 0.2s border;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
    border-color: rgba(255, 255, 255, 0.75);
  }
`;

const AddIssueForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length === 0 || description.length === 0) {
      return;
    }
    const formData = {
      title,
      description,
    };

    setTitle("");
    setDescription("");

    props.onAddIssue(formData);
  };

  return (
    <AddForm onSubmit={submitHandler}>
      <AddFormControl>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={title}
        />
      </AddFormControl>
      <AddFormControl>
        <label htmlFor="description">Description</label>
        <textarea
          rows="10"
          id="description"
          onChange={descriptionChangeHandler}
          value={description}
        />
      </AddFormControl>
      <AddButton type="submit">Add Issue</AddButton>
    </AddForm>
  );
};

export default AddIssueForm;
