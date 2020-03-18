import React from "react";

const People = props => {
  return (
    <div>
      {props.person.map(person => (
        <div key={person.id}>
          <h1>Name: {person.name}</h1>
          <h2>Email: {person.email}</h2>
          <h2>Job Title: {person.title}</h2>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default People;
