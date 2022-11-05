import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
