import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Google = () => {
    const {googleLogin} = useContext(AuthContext)
    const handleLogin = () =>{
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast('login successful !')
        })
        .catch(error =>{
            toast(error.message)
        })
    }
    return (
        <div className="container mx-auto md:w-1/4 mb-10">
            <p className="text-center mb-5 text-xl">or</p>
            <button onClick={handleLogin} className="btn btn-error text-white btn-outline w-full"> <FaGoogle className="mr-3"></FaGoogle> Login With Google</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Google;