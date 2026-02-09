import React, { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, User, Mail, Edit, Loader } from "lucide-react";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id);
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--background)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader className="animate-spin" size={32} color="var(--primary)" />
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--background)" }}>
        <Navbar />
        <div className="container" style={{ padding: "2rem 1rem", textAlign: "center" }}>
          <p>User not found.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>Back to Dashboard</Link>
        </div>
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
          <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-main)" }}>User Details</h2>
            <Link to={`/edit/${id}`} className="btn" style={{ color: "var(--primary)", background: "rgba(99, 102, 241, 0.1)" }}>
              <Edit size={16} />
              Edit
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "0.75rem", borderRadius: "50%", color: "var(--primary)" }}>
                <User size={24} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "0.25rem" }}>User ID</label>
                <div style={{ fontSize: "1.125rem", color: "var(--text-main)", fontWeight: "500" }}>{user.id}</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "0.75rem", borderRadius: "50%", color: "var(--primary)" }}>
                <User size={24} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Full Name</label>
                <div style={{ fontSize: "1.125rem", color: "var(--text-main)", fontWeight: "500" }}>{user.name}</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ background: "rgba(236, 72, 153, 0.1)", padding: "0.75rem", borderRadius: "50%", color: "var(--secondary)" }}>
                <Mail size={24} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Email Address</label>
                <div style={{ fontSize: "1.125rem", color: "var(--text-main)", fontWeight: "500" }}>{user.mail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
