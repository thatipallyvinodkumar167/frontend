import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api/userApi";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, Save, Loader } from "lucide-react";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: "", name: "", mail: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getUserById(id).then(res => {
      setUser(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await updateUser(id, user);
    setSaving(false);
    navigate("/");
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--background)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader className="animate-spin" size={32} color="var(--primary)" />
      </div>
    );
  }

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
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-main)" }}>Edit User</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Update the user's information.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>User ID</label>
              <input
                className="input-field"
                disabled
                value={user.id}
                style={{ background: "var(--background)", cursor: "not-allowed" }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>Full Name</label>
              <input
                className="input-field"
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
                required
                value={user.mail}
                onChange={(e) => setUser({ ...user, mail: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "var(--text-main)" }}>Password</label>
              <input
                className="input-field"
                type="text"
                placeholder="Update password (optional)"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }} disabled={saving}>
              <Save size={18} />
              {saving ? "Updating..." : "Update User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
