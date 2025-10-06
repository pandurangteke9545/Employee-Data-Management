import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const navigate = useNavigate();
  const [emp, setemp] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    const empdata = await axios.get('http://localhost:5000/getemployee/');
    setemp(empdata.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleUpdate(emp_id) {
    navigate(`/updateemployee/${emp_id}`);
  }

  async function handleDelete(emp_id) {
    const confirmDelete = window.confirm(`Are you sure you want to delete employee ${emp_id}?`);
    if (!confirmDelete) {
      toast.info("Delete cancelled");
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/deleteemployee/${emp_id}`);
      setemp(prevEmp => prevEmp.filter(emp => emp.emp_id !== emp_id));
      toast.success(`Employee deleted ${emp_id}`);
    } catch (error) {
      toast.error(`${error.message} please try again!!!`);
    }
  }

  // 🔍 Filter employees based on emp_id, empName, or email
  const filteredEmployees = emp.filter(employee =>
    employee.emp_id.toString().includes(search.trim()) ||
    employee.empName.toLowerCase().includes(search.trim().toLowerCase()) ||
    (employee.email && employee.email.toLowerCase().includes(search.trim().toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-blue-600 font-bold text-3xl mb-4">Employee Data</h1>

        {/* 🔍 Search Input */}
        <input
          type="text"
          placeholder="Search by ID, Name, or Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 w-80 focus:outline-none focus:ring focus:ring-blue-300"
        />
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
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.emp_id} className="text-center border-t">
                <td className="py-2 px-4 border">{employee.emp_id}</td>
                <td className="py-2 px-4 border">{employee.empName}</td>
                <td className="py-2 px-4 border">{employee.email || "N/A"}</td>
                <td className="py-2 px-4 border">{employee.designation}</td>
                <td className="py-2 px-4 border">
                  {new Date(employee.dateOfJoining).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(employee.emp_id)}
                  >
                    Delete
                  </button>
                </td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleUpdate(employee.emp_id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">
                No matching employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default Home;
