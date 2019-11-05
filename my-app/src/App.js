import React, { useState } from 'react';
import './App.css';

import TeamMembers from "../components/TeamMembers.js.js.js";
import Form from "../components/Form.js/index.js.js.js.js";

import styles from "./styles.css";

function App() {


  const [teamMembers, setTeamMembers] = useState ([
    {    
      id:1,
      name: "Robert Stewart",
      email: "rstewart414@gmail.com",
      role: "web developer"
    }


  ])

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  const memberToEdit = teamMember => {

  }



  return (
    <div className="App">
      <h1>Add a New Team Member</h1>
      <Form addNewTeamMember = {addNewTeamMember}/>
      <TeamMembers teamMembers = {teamMembers}/>
    </div>
  );
}

export default App;