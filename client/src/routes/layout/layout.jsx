import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
    return (
        <div className="content">
            <Outlet></Outlet>
        </div>
    )
}


function RequiredAuth() {
    const { currentUser } = useContext(AuthContext);

    return (
        (!currentUser) ?
            <Navigate to={'/login'}></Navigate> :
            <div className="content">
                <Outlet></Outlet>
            </div>
    )
}

export { Layout, RequiredAuth };