import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
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
      <br></br>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <div className="form-outline mb-4">
              <p className="form-label">First Name</p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>

            <div className="form-outline mb-4">
              <p className="form-label">Last Name</p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>

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
              <p className="form-label">Email</p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={(e)=>{registerUser(e)}}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
