import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddEmployee from "./Pages/AddEmployee";
import UpdateEmployee from "./Pages/UpdateEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addemployee" element={<AddEmployee />} />
      <Route path="/updateemployee/:emp_id" element={<UpdateEmployee />} />
    </Routes>
  );
}

export default App;

