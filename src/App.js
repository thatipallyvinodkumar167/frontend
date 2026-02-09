
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      <Route path="/view/:id" element={<ViewUser />} />
    </Routes>
  );
}

export default App;
// Trigger Rebuild
