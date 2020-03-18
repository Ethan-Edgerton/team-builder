import React, { useState } from "react";
import "./App.css";
import TeamForm from "./components/Form";
import People from "./components/Team";

function App() {
  const [teamState, setTeamState] = useState([
    {
      name: "Billy",
      email: "Bob@Joe.com",
      title: "Boss"
    }
  ]);

  const addPersonHandler = newPerson => {
    setTeamState([...teamState, newPerson]);
  };

  return (
    <div className="App">
      <TeamForm addTeamMember={addPersonHandler} />
      <People person={teamState} />
    </div>
  );
}

export default App;
