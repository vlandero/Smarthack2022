import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  async function loginUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const result = await axios.post("http://localhost/login", {
      username: username,
      password: pwd,
    });
    console.log(result.data);
    sessionStorage.setItem("session", JSON.stringify(result.data));
    if (result.data.role === "owner") {
      window.location.href = "/create-startup";
    }
  }

  return (
    <div className="App">
      <h1>Log in</h1>
      <br></br>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
            <div className="form-outline mb-4">
              <p className="form-label">Username</p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>

            <div className="form-outline mb-4">
              <p className="form-label">Password</p>
              <input
                className="form-control"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>

            <button
              className="input_submit"
              type="submit"
              onClick={(e) => loginUser(e)}
            >
              Go
            </button>
            <p>
              Create a new account <a href="/signUp">here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
