import React, { useState } from "react";
import "../App.css";
const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  return (
    <div className="App">
      <h1>Sign up</h1>
      <form className="login">
        <h3 className="email">Email</h3>
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          required
        />
        <h3 className="password">Password</h3>
        <input
          className="input"
          placeholder="Enter your password"
          type="password"
          required
        />
        <h3 className="password">Reenter your password</h3>
        <input
          className="input"
          placeholder="Reenter your password"
          type="password"
          required
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default SignUp;
