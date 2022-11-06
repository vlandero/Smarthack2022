import { useNavigate } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  let navigate = useNavigate();
  const routeChangeLogin = () => {
    let path = `/logIn`;
    navigate(path);
  };
  const routeChangeSingUp = () => {
    let path = `/signUp`;
    navigate(path);
  };

  return (
    <div className="landingPage">
      <h1>Dream Startup</h1>
      <h3>Build and manage your own startups.</h3>
      <br></br>
      <button className="btn btn-primary" onClick={routeChangeLogin}>Log in</button>
      <br></br>
      <button className="btn btn-primary" onClick={routeChangeSingUp}>Sign up</button>
    </div>
  );
};

export default LandingPage;
