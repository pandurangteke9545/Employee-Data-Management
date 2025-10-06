import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar';
import { ToastContainer, toast } from 'react-toastify';
function Home() {

  const navigate = useNavigate();

  const [emp, setemp] = useState([])
  async function fetchData() {

    const empdata = await axios.get('http://localhost:5000/getemployee/');
    setemp(empdata.data.data)
    console.log("DAta")
    console.log(empdata.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleUpdate(emp_id) {
    console.log("Moved to updaet [page" + emp_id)
    navigate(`/updateemployee/${emp_id}`)
  }

  async function handleDelete(emp_id) {
    const confirmDelete = window.confirm(`Are you sure you want to delete employee ${emp_id}?`);
    if (!confirmDelete) {
      toast.info("Delete cancelled");
      return; 
    }
    try {
      await axios.delete(`http://localhost:5000/deleteemployee/${emp_id}`)
      setemp(prevEmp => prevEmp.filter(emp => emp.emp_id !== emp_id)); 
      toast.success(`Employee deleted ${emp_id}`)
    } catch (error) {
      toast.error(`${error.message} please try again!!!`)
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center font-bold text-3xl mt-10'>
        <h1 className='text-blue-600'>Employee Data</h1>
      </div>
      <table className="mt-10 min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Employee Id</th>
            <th className="py-2 px-4 border">Employee Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Designation</th>
            <th className="py-2 px-4 border">Date of Joining</th>
            <th className="py-2 px-4 border">Delete</th>
            <th className="py-2 px-4 border">Update</th>
          </tr>
        </thead>
        <tbody>
          {emp.map(employee => (
            <tr key={employee.emp_id} className="text-center border-t">
              <td className="py-2 px-4 border">{employee.emp_id}</td>
              <td className="py-2 px-4 border">{employee.empName}</td>
               <td className="py-2 px-4 border">{employee.email||null}</td>
              <td className="py-2 px-4 border">{employee.designation}</td>
              <td className="py-2 px-4 border">{new Date(employee.dateOfJoining).toLocaleDateString()}</td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(employee.emp_id)}>Delete</button>
              </td>
              <td className="py-2 px-4 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleUpdate(employee.emp_id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer
        position='top-center'
        autoClose ={1500}
        hideProgressBar={false}
        pauseOnHover = {false}
        theme='light'
      />
    </>
  )
}

export default Home

