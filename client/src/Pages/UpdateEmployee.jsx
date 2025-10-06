import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Component/Navbar'
 import { ToastContainer, toast } from 'react-toastify';
 import { useNavigate } from 'react-router-dom'

function UpdateEmployee() {
    const {emp_id} = useParams()
    const navigate = useNavigate()
   
    const [emp ,setEmp] = useState({
           empName : "",
           email : "",
           designation :"",
           dateOfJoining : ""
       })
    
     useEffect(() => {
        const fetchEmployee = async () => {
        const res = await axios.get(`http://localhost:5000/getemployee/${emp_id}`);
        console.log(res.data)
        setEmp(res.data.data);
        };
        fetchEmployee();
     }, [emp_id]);

    async function handleUpdate(){

        try {
             const responce = await axios.patch(`http://localhost:5000/updateemployee/${emp_id}`,
            {designation:emp.designation,email:emp.email,dateOfJoining:emp.dateOfJoining})
            toast.success(`${responce.data.message}`)
            setTimeout(()=>{
                 navigate('/')
            },1500)  
        } catch (error) {
             toast.error(error.message)
        }
    }

    function handleChange(e){
        const {id,value} = e.target
        setEmp({...emp, [id]:value })   
    }

  return (
   <>
  <Navbar />

  <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Update Employee</h2>

    <div className="mb-4">
      <label className="block font-medium mb-1">Employee ID</label>
      <p className="text-gray-700">{emp.emp_id}</p>
    </div>

    <div className="mb-4">
      <label className="block font-medium mb-1">Employee Name</label>
      <p className="text-gray-700">{emp.empName}</p>
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block font-medium mb-1">Update Email</label>
      <input
        type="email"
        id="email"
        value={emp.email}

        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="designation" className="block font-medium mb-1">Update Designation</label>
      <input
        type="text"
        id="designation"
        value={emp.designation}

        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="dateOfJoining" className="block font-medium mb-1">Update Date of Joining</label>
      <input
        type="date"
        id="dateOfJoining"
        value={emp.dateOfJoining}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <button
      onClick={handleUpdate}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
    >
      Update
    </button>
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

export default UpdateEmployee