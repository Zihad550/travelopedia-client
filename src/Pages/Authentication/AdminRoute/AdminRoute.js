import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  console.log(user.email, admin);
  const location = useLocation();
  if (isLoading && !admin?.role) {
    return <div className="rounded-full bg-white border-4 border-red-600" />;
  }
  if (admin?.role === "admin" && user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
