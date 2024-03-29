
import banner from '../../../assets/banner/banner.jpg'
import { FaArrowRight } from 'react-icons/fa';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Shop from '../Shop/Shop';
import { Link } from 'react-router-dom';

const Home = () => {
    document.title = 'SuperToy | Home'
    return (
        <div>
            <div className='relative'>
                <img className='w-full h-screen' src={banner} alt="banner" />
                <div className="absolute inset-0 w-full bg-gradient-to-r from-[#000000dc] to-[#04010182] flex justify-center items-center">
                    <div className='text-center space-y-5'>
                    <h1 className='text-5xl text-white font-bold'>Play With Your <span className='text-error'>Favorite Car</span></h1>
                    <p className='text-lg mx-3 md:mx-0 text-white'>Discover the thrilling world of toy cars at our website!  Unleash your imagination <br /> and embark on exciting adventures with our collection of toy cars. <br /> our selection offers endless possibilities for fun and exploration.</p>
                    {/* <button className="btn btn-error text-white">Explore More <FaArrowRight className='ml-3'></FaArrowRight></button> */}
                    <div className="brand_button m-auto">
                        <Link to='/login' className="btn_text">Explore more</Link>
                        <span className="btn_design"></span>
                    </div>
                    </div>
                </div>
            </div>
            <About></About>
            <Gallery></Gallery>
            <Shop></Shop>
            <Contact></Contact>
        </div>
    );
};

export default Home;