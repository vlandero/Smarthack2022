import { useNavigate } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/logIn`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path = `/signUp`;
    navigate(path);
  };

  return (
    <div className="landingPage">
      <h1>Dream Startup</h1>
      <h3>qwbvrnwqnbreqn</h3>
      <button onClick={routeChange}>Log in</button>
      <button onClick={routeChange2}>Sign up</button>
    </div>
  );
};

export default LandingPage;
