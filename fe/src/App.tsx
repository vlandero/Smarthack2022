import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
