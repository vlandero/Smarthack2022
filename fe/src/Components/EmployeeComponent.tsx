import React from 'react'

interface Emp{
    nume: string;
    salariu: string;
  }

const EmployeeComponent = ({employee, setEmployees,index}:{employee:Emp,setEmployees:React.Dispatch<React.SetStateAction<Emp[]>>, index:number}) => {
  return (
    <div className='employeeComponent'>
        {employee.nume}
         <input placeholder='Add employee salary' value={employee.salariu} onChange={(e)=>{
            setEmployees((prov)=>{prov[index].salariu=e.target.value; return [...prov]})
        }}></input>
    </div>
  )
}

export default EmployeeComponent