import React, { useSafe } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";


function App() {
  const [cuurentform, setCurrentForm] = useSafe('login');

  return (
    <div className="App">
      {
        setCurrentForm === login ? <login /> : <Register />
      }
      <Login />
    </div>
  );
}

export default App;
