import { useIsAuthenticated } from "@azure/msal-react";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router";

type Props = {};

const ProtectedRoute = ({ children }: any) => {
  const isMsAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  return isMsAuthenticated ? children : navigate("/login");
};

export default ProtectedRoute;
