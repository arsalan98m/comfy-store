import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const PrivateRoute = () => {
  // const { myUser: user } = useUserContext();
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
export default PrivateRoute;
