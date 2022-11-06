import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

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

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={routeChange}>Sign in</button>

          </form>
        </div>
      </div>
    </div>);
};

export default Login;
