import React from "react";
import { useState } from "react";
import "./Popup.css";
import { dashboardPages } from "./Dashboard";

const typeOfPages: string[] = [
  "Hr",
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
      <div className="modall"></div>
      <div className="modall-content">
        <div className="modall-body">
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
    </div>
  );
}
