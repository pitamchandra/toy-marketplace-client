
import { FaCarCrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import logo from '../../../assets/logo/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const li = <>
        <li><NavLink className={({ isActive }) => isActive ? "px-4 text-error" : "px-4"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "px-4 text-error" : "px-4"}  to='/allToys'>All Toys</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "px-4 text-error" : "px-4"}  to='/blogs'>Blogs</NavLink></li>
        {
            user && <>
            <li><NavLink className={({ isActive }) => isActive ? "px-4 text-error" : "px-4"} to='/myToys'>My Toys</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "px-4 text-error" : "px-4"} to='/addToy'>Add A Toy</NavLink></li>
            </> 
        }
    </>

    const handleLogout = () =>{
        logout()
        .then(()=>{
            toast('logout successful !')
        })
    }

  return (
    <nav className="my-2 bg-base-900">
        <div className="navbar container mx-auto px-3 md:px-0">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {li}
                </ul>
                </div>
                <Link to='/' className="text-xl hidden md:block styles_font">Happy Child</Link>
                <Link to='/' className="text-xl"><FaCarCrash className="w-7 text-red-400" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex nav_menu">
                {li}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <div className="tooltip tooltip-bottom tooltip-error" data-tip={user?.displayName}>
                        <img className="w-12 h-12 mr-4 rounded-full bg-error" src={user?.photoURL} alt="user" />
                    </div>
                        <Link to='/login' onClick={handleLogout} className="btn btn-error text-white">Logout</Link>
                    </> :
                    <div className="">
                        <div className="brand_button">
                            <Link to='/login' className="btn_text">Login</Link>
                            <span className="btn_design"></span>
                        </div>
                    </div>
                }
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </nav>
  );
}

export default Navbar;
