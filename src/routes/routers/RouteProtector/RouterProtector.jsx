import React from "react";
import { Outlet, Navigate, } from "react-router-dom";


const RouteProtecor = ({isAllowed=true, redirectTo='/', children}) => {
  // when is not allowed, redirect to the redirectTo path
    if(!isAllowed) return <Navigate to={redirectTo} />

    return children ? children : <Outlet />;
}

export default RouteProtecor;