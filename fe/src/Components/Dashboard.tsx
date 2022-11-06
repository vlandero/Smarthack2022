import { useState } from "react";
import Calendar from "../Dashboard-pages/Calendar";
import Home from "../Dashboard-pages/Home";
import "./Dashboard.css";
import Popup from "./Popup";
import axios from "axios";

// interface Page {}

var dashboardPages: string[] = ["Home"];
var typeOfPages: string[] = ["HR", "Task-Management", "Calendar"];

const Dashboard = () => {
  const [pageOpen, setpageOpen] = useState<number>(0);
  const [popup, setPopup] = useState<boolean>(false);
  const [startupId, setStartupId] = useState<number>(0);

  return (
    <div className="dashboard">
      <div className="title">
        <h1>{startupId}</h1>
      </div>
      <div className="menu">
        <div className="tabs">
          <ul>
            {dashboardPages.map((dashboardPage, index) => (
              <li
                onClick={() => {
                  setpageOpen(index);
                }}
              >
                <button
                  style={{
                    backgroundColor: pageOpen === index ? "#ff00ff" : "#eb78ff",
                  }}
                >
                  {dashboardPage}
                </button>
              </li>
            ))}
            <li>
              <button
                className="addPage"
                onClick={() => {
                  setPopup(true);
                }}
              >
                +
              </button>
            </li>
          </ul>
        </div>

        <div className="content">
          <Home pageOpen={pageOpen}></Home>
          <Calendar pageOpen={pageOpen}></Calendar>
        </div>
      </div>
      <Popup popup={popup} setPopup={setPopup}></Popup>
    </div>
  );
};

export default Dashboard;
export { dashboardPages, typeOfPages };
