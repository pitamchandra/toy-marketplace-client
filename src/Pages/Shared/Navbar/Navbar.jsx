

import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {
    const user = '';
    const li = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toys</Link></li>
        <li><Link to='/'>Blogs</Link></li>
        {
            user && <>
            <li><Link to='/'>My Toys</Link></li>
            <li><Link to='/'>Add A Toy</Link></li>
            </> 
        }
    </>

  return (
    <nav className=" bg-base-900">
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {li}
                </ul>
                </div>
                <Link to='/' className="text-xl"><img className="w-24 mr-3" src={logo} alt="logo" /></Link>
                <Link to='/' className="text-xl hidden md:block">Super Car Toy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {li}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                        <img title={user?.displayName} className="w-12 h-12 mr-4 rounded-full bg-error" src={user?.photoUrl} alt="user" />
                        <Link to='/login' className="btn btn-error text-white">Logout</Link>
                    </> :
                    <Link to='/login' className="btn btn-error text-white">Login</Link>
                }
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
