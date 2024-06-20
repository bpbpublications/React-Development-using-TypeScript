import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ExternalAPIComponent from "./externalComponent/ExternalAPIComponent";

function App() {
  const handleLogin = (username: string, password: string) => {
    alert("Login Attempt:" + username + password);
    // Here, you can add logic to handle the login attempt, such as calling an API.
  };
  return (
    <div className="App">
      <div>Welcome to home</div>
      <>
        <LoginForm onLogin={handleLogin} />
      </>
      <>
        <ExternalAPIComponent />
      </>
    </div>
  );
}

export default App;
