import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const token = document.cookie.includes("authToken");

    return token ? <Outlet/> : <Navigate to="/login" replace/>;
}

export default ProtectedRoute