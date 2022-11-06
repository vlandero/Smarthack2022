import React, { useState } from "react";
import "./Contability.css";

interface Props {
  department: string
  lookupTable: Record<string, Record<string, string>>,
  setLookupTable: React.Dispatch<React.SetStateAction<Record<string, Record<string, string>>>>
}

const ContabilityTable = ({ department, lookupTable, setLookupTable }: Props): JSX.Element => {
  const [newDepartment, setNewDepartment] = useState<string>("");
  return (
    <div className="contability-table">
      {Object.keys(lookupTable[department]).map((key) => {
        return (
          <div>
            <div>{key} : <input value={lookupTable[department][key]} onChange={(e) => {
              setLookupTable({ ...lookupTable, [department]: { ...lookupTable[department], [key]: e.target.value } })
            }}></input></div>
          </div>
        )
      })}
      <input placeholder="Add new cost" value={newDepartment} onChange={(e) => { setNewDepartment(e.target.value) }} style={{ width: 140, height: 40 }}></input>
      <button onClick={(e)=>{
        setLookupTable({ ...lookupTable, [department]: { ...lookupTable[department], [newDepartment]: '0' } })
        setNewDepartment("")
      }}>Add</button>
    </div>
  );
}


export const Contability = () => {
  const [departments, setDepartments] = useState<string[]>(['Production']);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Production');
  const [lookupTable, setLookupTable] = useState<Record<string, Record<string, string>>>({ 'Production': { Cost: '0' } });
  const [newDepartment, setNewDepartment] = useState<string>('');
  return (
    <div className="contability">
      <div className="header">
        <h1>Contability</h1>
        <button>Settings</button>
      </div>

      <div className="costs">
        <ul>
          {departments.map((department, index) => {
            return (
              <li key={index} onClick={() => { setSelectedDepartment(department) }}>
                <h2>{department}</h2>
              </li>
            )
          })}
          <li>
            <input placeholder="Add new cost" value={newDepartment} onChange={(e) => { setNewDepartment(e.target.value) }} style={{ width: 140, height: 40 }}></input>
            <button onClick={() => {
              setDepartments([...departments, newDepartment]);
              setLookupTable({ ...lookupTable, [newDepartment]: { Cost: '0' } })
              setNewDepartment('');
            }}>Add</button>
          </li>
        </ul>
        <ContabilityTable lookupTable={lookupTable} department={selectedDepartment} setLookupTable={setLookupTable}></ContabilityTable>
      </div>
    </div>
  );
};
