import React, { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <div className="">
        <div className="">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={descriptionChangeHandler}
            value={description}
          />
        </div>
      </div>
      <div className="">
        <button type="submit">Add Issue</button>
      </div>
    </form>
  );
};

export default AddIssueForm;
