import React, { useState } from "react";

const TeamForm = props => {
  const [teamForm, setTeamForm] = useState({
    name: "",
    email: "",
    title: ""
  });

  const changeHandler = event => {
    setTeamForm({
      ...teamForm,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addTeamMember({
      ...teamForm,
      id: Date.now()
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={changeHandler}
      ></input>

      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={changeHandler}
      ></input>

      <label htmlFor="title">Your Job Title</label>
      <select onChange={changeHandler} name="title">
        <option value="JR Web Developer">Junior Web Developer</option>
        <option value="SR Web Developer">Senior Web Developer</option>
        <option value="Team Lead">Lambda Team Lead</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      <br></br>

      <button type="submit">Add to the Team!</button>
    </form>
  );
};

export default TeamForm;
