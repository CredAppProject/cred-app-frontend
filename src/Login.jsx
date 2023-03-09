import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth_form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          value={email}
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password"></label>
        <input
          value={pass}
          placeholder="**********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an account?
      </button>
    </div>
  );
};
