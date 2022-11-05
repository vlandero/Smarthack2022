import React from "react";
import { useState } from "react";
import "./Popup.css";
import { dashboardPages } from "./Dashboard";

const typeOfPages: string[] = [
  "HR",
  "Task-Management",
  "Calendar",
  "Contact",
  "Contability",
  "Marketing",
  "Sales",
  "Finance",
  "Legal",
  "IT",
  "Recruitment",
  "Customer Support",
];
export default function Popup({ popup, setPopup }: any) {
  if (popup === false) {
    return null;
  }
  return (
    <div>
      <div className="modal"></div>
      <div className="modal-content">
        <h2 style={{ textAlign: "center" }}>Choose a department page to add</h2>
        {/* <button onClick={() => setPopup(false)}>Try</button> */}
        {typeOfPages.map((typeOfPages, index) => (
          <button
            onClick={() => {
              setPopup(false);
              dashboardPages.push(typeOfPages);
            }}
          >
            {typeOfPages}
          </button>
        ))}
      </div>
    </div>
  );
}
