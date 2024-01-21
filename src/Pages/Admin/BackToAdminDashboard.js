import React from "react";
import { Link } from "react-router-dom";

const BackToAdminDashboard = () => {
  return (
    <div
      className="header__action"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="tf-button" to="/admin/dashboard">
        <span> Admin Dashboard</span>
        <i class="icon-arrow-right2"></i>
      </Link>
    </div>
  );
};

export default BackToAdminDashboard;
