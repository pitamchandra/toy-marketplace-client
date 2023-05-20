
import { Link } from 'react-router-dom';
import error from '../../assets/error/error.jpg'
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='relative'>
            <img className='w-full h-screen' src={error} alt="" />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[#00000096] to-[#2c094c9b] flex justify-center items-center">
                <div className='text-center space-y-5'>
                    <h1 className='text-9xl text-white font-bold'><span className='text-error'> 404 </span></h1>
                    <p className='text-xl text-white font-bold'>Page Not Found !!!</p>
                    <Link to='/' className='flex items-center justify-center border-2 py-2  border-error text-error bg-white'> <FaArrowLeft></FaArrowLeft> back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;