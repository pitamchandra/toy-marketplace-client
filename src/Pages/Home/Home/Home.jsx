
import banner from '../../../assets/banner/banner.jpg'
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full h-screen' src={banner} alt="banner" />
                <div className="absolute inset-0 w-full bg-gradient-to-r from-[#000000dc] to-[#04010182] flex justify-center items-center">
                    <div className='text-center space-y-5'>
                    <h1 className='text-5xl text-white font-bold'>Play With Your <span className='text-error'>Favorite Car</span></h1>
                    <p className='text-lg text-white'>Discover the thrilling world of toy cars at our website!  Unleash your imagination <br /> and embark on exciting adventures with our collection of toy cars. <br /> our selection offers endless possibilities for fun and exploration.</p>
                    <button className="btn btn-error text-white">Explore More <FaArrowRight className='ml-3'></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;