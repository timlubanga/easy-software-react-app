import "./App.css";
import React from "react";

import AppBar from "./Components/AppBar";
import Users from "./Components/Users";
import { Container } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        <Users />
      </Container>
    </div>
  );
}

export default App;
