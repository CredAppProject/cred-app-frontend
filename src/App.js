import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [cuurentform, setCurrentForm] = useState('login');

  return (
    <div className="App">
      {cuurentform === 'login' ? <Login onFormSwitch={setCurrentForm} /> : <Register onFormSwitch={setCurrentForm} />}
    </div>
  );
}

export default App;
