import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import AppBar from "./Components/AppBar";
function App() {
  useEffect(() => {
    axios
      .get("https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <AppBar />
    </div>
  );
}

export default App;
