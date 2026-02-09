import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, PlusCircle, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              display: "grid",
              placeItems: "center",
            }}
          >
            <LayoutDashboard size={22} color="#fff" />
          </div>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            UserDeck
          </span>
        </Link>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <NavLink
            to="/"
            icon={<Home size={18} />}
            label="Dashboard"
            active={location.pathname === "/"}
          />
          <NavLink
            to="/add"
            icon={<PlusCircle size={18} />}
            label="Add User"
            active={location.pathname === "/add"}
          />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none",
        padding: "0.5rem 0.75rem",
        borderRadius: "0.375rem",
        fontWeight: active ? "600" : "500",
        color: active ? "#4f46e5" : "#6b7280",
        background: active ? "rgba(99, 102, 241, 0.1)" : "transparent",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;
