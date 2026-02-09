import React, { useState } from "react";
import { createUser } from "../api/userApi";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, Save } from "lucide-react";

const AddUser = () => {
  const [user, setUser] = useState({ id: "", name: "", mail: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createUser(user);
    setLoading(false);
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Navbar />
      <div className="container" style={{ padding: "2rem 1rem", maxWidth: "600px" }}>
        <Link to="/" className="btn" style={{ color: "var(--text-muted)", paddingLeft: 0, marginBottom: "1rem" }}>
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="card">
          <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-main)" }}>Add New User</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Enter the details of the new user below.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>User ID</label>
              <input
                className="input-field"
                type="number"
                placeholder="101"
                required
                value={user.id}
                onChange={(e) => setUser({ ...user, id: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>Full Name</label>
              <input
                className="input-field"
                placeholder="John Doe"
                required
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>Email Address</label>
              <input
                className="input-field"
                type="email"
                placeholder="john@example.com"
                required
                value={user.mail}
                onChange={(e) => setUser({ ...user, mail: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>Password</label>
              <input
                className="input-field"
                type="password"
                placeholder="******"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }} disabled={loading}>
              <Save size={18} />
              {loading ? "Saving..." : "Save User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
