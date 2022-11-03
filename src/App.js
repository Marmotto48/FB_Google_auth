import React from "react";
import "./App.css";
import FBLogin from "./components/FBLogin";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FacebookLogin from "@greatsumini/react-facebook-login";

function App() {
  return (
    <div className="App">
      <h2>GOOGLE LOGIN</h2>
      <Login />
      <br />
      <Logout />
      <h2>FACEBOOK LOGIN</h2>

      <FBLogin />
    </div>
  );
}

export default App;
