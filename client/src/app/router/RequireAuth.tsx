import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "./configureStore";

export default function RequireAuth(){
    const {user} = useAppSelector(x=>x.account);
    const location=useLocation();

    if(!user){
        return <Navigate to="/login" state={{from: location}}/>
    }

    return <Outlet />
}