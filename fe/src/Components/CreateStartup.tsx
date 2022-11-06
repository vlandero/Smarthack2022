import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CreateStartup.css";

const CreateStartup = () => {
  const [startups, setStartups] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const fetchDatas = async () => {
      const result = await axios.get("localhost/startups");
      setStartups(result.data);
    };
    fetchDatas();
  }, []);

  return (
    <div className="createStartup">
      <h2>Create a new startup or go to an existing one</h2>
      <div className="createStartup__form">
        <ul>
          {startups.map((startup: any) => (
            <li
              onClick={(e) => {
                console.log(startup);
              }}
            >
              <button>{startup}</button>
            </li>
          ))}
        </ul>
        <form className="createStartupForm">
          <label htmlFor="startupName">Startup name</label>
          <input
            type="text"
            id="startupName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="startupDescription">
            Startup description (optional)
          </label>
          <textarea
            id="startupDescription"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              const result = await axios.post(
                "http://localhost/create-startup",
                {
                  name: name,
                  description: description,
                }
              );
              setStartups([...startups, result.data]);
              console.log(result.data);
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStartup;
