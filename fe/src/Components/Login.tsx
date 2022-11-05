import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <div className="App">
      <h1>Log in</h1>
      <form className="login">
        <h3 className="email">Email</h3>
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <h3 className="password">Password</h3>
        <input
          className="input"
          placeholder="Enter your password"
          type="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <button className="input_submit" type="submit" onClick={routeChange}>
          Go
        </button>
        <p>
          Create a new account <a href="/signUp">here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
