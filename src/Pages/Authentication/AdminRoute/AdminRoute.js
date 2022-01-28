import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin, adminLoading } = useAuth();
  console.log(adminLoading);

  console.log(user, admin);
  const location = useLocation();
  if (adminLoading && Object.keys(admin).length === 0) {
    return <div className="rounded-full bg-white border-4 border-red-600" />;
  } else {
    if (user.email) {
      if (admin.role === "admin") {
        return children;
      } else {
        return <Navigate to="/login" state={{ from: location }} />;
      }
    }
  }
};

export default AdminRoute;
