import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from '../assets/loading/loading-chain.gif'
import { ToastContainer, toast } from "react-toastify";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()


    if(loading){
        return <div className="w-full h-screen fixed bg-white flex items-center justify-center ">
            <img src={loadingImg} alt="" />
        </div>
    }
    if(user){
        return children;
    }
    return <>
    <Navigate to='/login' state={location}></Navigate>
    {toast("Please Login first!")}
    <ToastContainer></ToastContainer>
    </>
};

export default PrivateRoute;