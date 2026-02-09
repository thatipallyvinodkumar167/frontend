import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Edit, Trash2 } from "lucide-react";

const UserTable = ({ users, loading, onDelete }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="card" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
        <div style={{ display: "inline-block", width: "2rem", height: "2rem", border: "3px solid var(--border)", borderTopColor: "var(--primary)", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
        <p style={{ marginTop: "1rem" }}>Loading users...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="card" style={{ overflow: "hidden", padding: 0 }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600", color: "var(--text-muted)", fontSize: "0.875rem" }}>ID</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600", color: "var(--text-muted)", fontSize: "0.875rem" }}>Name</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600", color: "var(--text-muted)", fontSize: "0.875rem" }}>Mail</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600", color: "var(--text-muted)", fontSize: "0.875rem", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                  No users found. Start by adding one!
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u._id} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.2s" }} className="hover-row">
                  <td style={{ padding: "1rem 1.5rem", fontWeight: "500", color: "var(--text-main)" }}>{u.id}</td>
                  <td style={{ padding: "1rem 1.5rem", fontWeight: "500", color: "var(--text-main)" }}>{u.name}</td>
                  <td style={{ padding: "1rem 1.5rem", color: "var(--text-muted)" }}>{u.mail}</td>
                  <td style={{ padding: "1rem 1.5rem", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => navigate(`/view/${u._id}`)}
                        className="btn"
                        style={{ padding: "0.5rem", color: "var(--primary)", background: "rgba(99, 102, 241, 0.1)" }}
                        title="View"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => navigate(`/edit/${u._id}`)}
                        className="btn"
                        style={{ padding: "0.5rem", color: "var(--warning)", background: "rgba(245, 158, 11, 0.1)" }}
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => onDelete(u._id)}
                        className="btn"
                        style={{ padding: "0.5rem", color: "var(--danger)", background: "rgba(239, 68, 68, 0.1)" }}
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
