import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';


function AddEmployee() {

    const navigate = useNavigate()
    const [emp ,setEmp] = useState({
        empName : "",
        email : "",
        designation :"",
        dateOfJoining : ""
    })

    async function handleEmplyeeForm(e){
         e.preventDefault();
         console.log(emp)
         try {
            const responce  =await axios.post('http://localhost:5000/addemployee/',{
            empName:emp.empName,email:emp.email,designation:emp.designation,dateOfJoining:emp.dateOfJoining
            })
            toast.success(responce.data.message)
            setTimeout(()=>{
              navigate('/')
            },1500)

         } catch (error) {
            toast.error(`${error.message} plaease try again!!!`)
         } 
    }

    function handleChange(e){
        const {id , value} = e.target
        setEmp({ ...emp, [id]: value });
    }

  return (
     <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add Employee</h2>

        <form onSubmit={handleEmplyeeForm} className="space-y-4">
          <div>
            <label htmlFor="empName" className="block font-medium mb-1">
              Employee Name
            </label>
            <input
              type="text"
              id="empName"
              value={emp.empName}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="eamil"
              id="email"
              value={emp.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="designation" className="block font-medium mb-1">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              value={emp.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="dateOfJoining" className="block font-medium mb-1">
              Date of Joining
            </label>
            <input
              type="date"
              id="dateOfJoining"
              value={emp.dateOfJoining}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default AddEmployee
