import React, { useState } from "react";
import EmployeeComponent from "../Components/EmployeeComponent";
import "./Hr.css";

interface Emp{
  nume: string;
  salariu: string;
}


export const Hr = () => {
  const [employees, setEmployees] = useState<Emp[]>([]);
  const [newEmployee, setNewEmployee] = useState<string>('');
  return (
    <div className="hr">
      <div className="header">
        
          <h1>Human resources</h1>
          <button>Settings</button>
      </div>
      <div>
        {
            employees.map((employee:Emp, index:number) => (
                <EmployeeComponent setEmployees={setEmployees} employee={employee} index={index} key={index}/>
            ))
            // add employee button
        }
        <div>
          <input placeholder="Add new employee" value={newEmployee} onChange={(e) => { setNewEmployee(e.target.value) }} style={{ width: 140, height: 40 }}></input>
          <button onClick={()=>{
            setEmployees([...employees, {nume: newEmployee, salariu: '100'}])
            setNewEmployee('')
          }}>Add employee</button>
        </div>
      </div>
      
      
            
      
      <div className="employees">
        <ul>
            
        </ul>
      </div>
    </div>
  );
};
