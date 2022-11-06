import { useState, useEffect } from "react";
import Calendar from "../Dashboard-pages/Calendar";
import Home from "../Dashboard-pages/Home";
import "./Dashboard.css";
import Popup from "./Popup";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hr } from "../Dashboard-pages/Hr";
import { Contability } from "../Dashboard-pages/Contability";

var dashboardPages: string[] = [];
var typeOfPages: string[] = [];

const render = (page:string) => {
  switch (page) {
    case "Calendar":
      return <Calendar />;
    case "Hr":
      return <Hr />;
    case "Contability":
      return <Contability />;
    default:
      return null;
  }
};


const Dashboard = () => {
  const [pageOpen, setpageOpen] = useState<number>(0);
  const [popup, setPopup] = useState<boolean>(false);
  const [startup, setStartup] = useState<any>({});

  useEffect(() => {
    // redirect if no startups in session
    const session = sessionStorage.getItem("startup") || "{}";
    if (session === "{}") {
      window.location.href = "/login";
    }
    const startup = JSON.parse(session);
    setStartup(startup);

  }, [])

  return (
    <div>
      <div className="navbar-header">
        <div className="title">
          <h1>{startup.name}</h1>
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
              <a href="#"
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
        </div>
        <Popup popup={popup} setPopup={setPopup}></Popup>
      </div>
      <div className="contentt">
          {
            render(dashboardPages[pageOpen])
          }
      </div>
    </div>

  );
};
export default Dashboard;
export { dashboardPages, typeOfPages };
