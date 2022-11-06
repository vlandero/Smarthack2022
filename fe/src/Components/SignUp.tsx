import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  let navigate = useNavigate();
  const routeChange = (path: string): void => {
    navigate(path);
  };
  async function registerUser(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const result = await axios.post("http://localhost/register-owner", {
      email: email,
      password: pwd,
      firstName: firstName,
      lastName: lastName,
      username: username,
    });
    console.log(result.data);
    routeChange("/login");
  }
  return (
    <div className="App">
      <h1>Sign up</h1>
      <form className="login">
        <h3 className="email">First Name</h3>
        <input
          className="input"
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <h3 className="email">Last Name</h3>
        <input
          className="input"
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
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
        <h3 className="password">Reenter your password</h3>
        <input
          className="input"
          placeholder="Reenter your password"
          type="password"
          required
        />
        <button
          className="input_submit"
          type="submit"
          onClick={(e) => {
            registerUser(e);
          }}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default SignUp;
