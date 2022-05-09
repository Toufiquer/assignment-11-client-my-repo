import React from "react";
import { Navigate, useLocation } from "react-router";
import useFireBase from "../hooks/useFireBase";
const RequireAuth = ({ children }) => {
    const { user } = useFireBase();
    const location = useLocation();
    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default RequireAuth;
