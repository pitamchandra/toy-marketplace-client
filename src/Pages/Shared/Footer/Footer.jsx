
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-300 text-base-content">
                <div>
                    <img className='w-24' src={logo} alt="logo" />
                    <p className='text-xl'><strong>Supper Car Toy LTD.</strong></p>
                    <p className='text-lg'>Providing best smart toy since 2001. <br /> Discover the thrilling world of <br /> toy cars at our website!</p>
                </div> 
                <div>
                    <span className="text-xl text-black font-semibold">Services</span> 
                    <a className="link link-hover text-lg">sports car</a> 
                    <a className="link link-hover text-lg">truck</a> 
                    <a className="link link-hover text-lg">regular car</a> 
                    <a className="link link-hover text-lg">mini fire truck</a>
                </div> 
                <div>
                    <span className="text-xl text-black font-semibold">Links</span> 
                    <a className="link link-hover text-lg">About us</a> 
                    <a className="link link-hover text-lg">Contact</a> 
                    <a className="link link-hover text-lg">Jobs</a> 
                    <a className="link link-hover text-lg">Press kit</a>
                </div> 
                <div>
                    <span className="text-xl text-black font-semibold">Social Link</span> 
                    <div className='flex gap-6 text-xl'>
                    <Link to='https://www.facebook.com/'><FaFacebook></FaFacebook></Link>
                    <Link to='https://www.twitter.com/'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.instagram.com/'><FaInstagram></FaInstagram></Link>
                    <Link to='https://www.linkedin.com/'><FaLinkedinIn></FaLinkedinIn></Link>
                    </div>
                </div>
            </footer>
            <div className='bg-black text-center'>
                <p className='py-4 text-white'>&copy;Copyright All right reserved | <strong className='text-error'>Pitam Chandra</strong></p>
            </div>
        </div>
    );
};

export default Footer;