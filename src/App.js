import "./App.css";
import React from "react";
import AppBar from "./Components/AppBar";
import Users from "./Components/Users";
import { Container } from "@material-ui/core";
import UserView from "./Components/User";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
      <Route path="/" exact component={Users} />
        <Route path="/users/:id" exact component={UserView} />
      </Container>
    </div>
  );
}

export default App;
