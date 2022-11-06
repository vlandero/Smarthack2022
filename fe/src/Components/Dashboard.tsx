import { useState, useEffect } from "react";
import Calendar from "../Dashboard-pages/Calendar";
import Home from "../Dashboard-pages/Home";
import "./Dashboard.css";
import Popup from "./Popup";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

var dashboardPages: string[] = [];
var typeOfPages: string[] = [];

const Dashboard = () => {
  const [pageOpen, setpageOpen] = useState<number>(0);
  const [popup, setPopup] = useState<boolean>(false);
  const [startupId, setStartupId] = useState<number>(0);

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem("session") || "{}");
    if(!session.username){
      window.location.href = "/login";
    }
  })
  
  return (
    <div className="navbar-header">
      <div className="title">
        <h1>{startupId}</h1>
      </div>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">
              Dashboards
            </a>
          </li>
          {dashboardPages.map((dashboardPage, index) => (
            <li
              onClick={() => {
                setpageOpen(index);
              }}
            >
              <a href="#">
                {dashboardPage}
              </a>
            </li>
          ))}
          <li>
            <a href = "#" 
              onClick={() => {
                setPopup(true);
              }}
            >
              Add dashboard
            </a>
          </li>
        </ul>
      </div>

      <div className="menu">
        <div className="content">
          {dashboardPages.map((dashboardPage, index) => (
            <div>
              {index === pageOpen ? (
                <div>
                  <h1>{dashboardPage}</h1>
                  <br></br>
                </div>
              ) : null}
            </div>
          ))}

        </div>
      </div>
      <Popup popup={popup} setPopup={setPopup}></Popup>
    </div>
  );
};
export default Dashboard;
export { dashboardPages, typeOfPages };
