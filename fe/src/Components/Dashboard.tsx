import { useState } from "react";
import Home from "../Dashboard-pages/Home";
import "./Dashboard.css";

// interface Page {}

const dashboardPages: string[] = [
  "Home",
  "HR",
  "Task-Management",
  "sadfasdfs",
  "2",
  "3",
  "4",
  "5",
  "6",
];

const Dashboard = () => {
  const [pageOpen, setpageOpen] = useState<number>(1);
  return (
    <div className="dashboard">
      <div className="title">
        <h1>Nume Startup</h1>
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
                <button>{dashboardPage}</button>
              </li>
            ))}
            <li>
              <button className="addPage">+</button>
            </li>
          </ul>
        </div>

        <div className="content">
          <Home pageOpen={pageOpen}></Home>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
