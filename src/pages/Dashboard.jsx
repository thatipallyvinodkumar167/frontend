import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import { getUsers, deleteUser } from "../api/userApi";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Navbar />
      <div className="container" style={{ padding: "2rem 1rem" }}>
        <div className="page-header">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Manage your users and their permissions here.
            </p>
          </div>
          <Link to="/add" className="btn btn-primary">
            <Plus size={18} />
            <span>Add New User</span>
          </Link>
        </div>

        <UserTable users={users} loading={loading} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
