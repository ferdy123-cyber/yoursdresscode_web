import { Navigate } from "react-router-dom";
import React from "react";

const user_credent = JSON.parse(localStorage.getItem("user_credent"));
export const NotLoginRoute = ({ children }) => {
  if (user_credent) {
    if (user_credent.role_id == 2) {
      return <Navigate to="/" replace />;
    } else {
      return <Navigate to="/admin" replace />;
    }
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  if (!user_credent) {
    return <Navigate to="/login" replace />;
  }
  if (user_credent.role_id == 2) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
