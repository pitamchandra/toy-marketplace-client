
import { FaCarCrash, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-700 rounded-t-2xl text-white">
                <div>
                <div className='flex items-center mb-3'>
                <Link to='/' className="text-xl hidden md:inline styles_font">Happy Child</Link>
                <Link to='/' className="text-xl inline"><FaCarCrash className="w-7 text-red-400" /></Link>
                </div>
                    <p className=''><strong>Phone</strong>: 01780659402</p>
                    <p className=''><strong>Email</strong>: super@gmail.com</p>
                    <p className=''><strong>Address</strong>: Thakurgaon, Dhaka, Bangladesh</p>
                </div> 
                <div>
                    <span className="text-xl font-semibold">Services</span> 
                    <a className="link link-hover text-base hover:text-error">sports car</a> 
                    <a className="link link-hover text-base hover:text-error">truck</a> 
                    <a className="link link-hover text-base hover:text-error">regular car</a> 
                    <a className="link link-hover text-base hover:text-error">mini fire truck</a>
                </div> 
                <div>
                    <span className="text-xl font-semibold">Links</span> 
                    <a className="link link-hover text-base hover:text-error">About us</a> 
                    <a className="link link-hover text-base hover:text-error">Contact</a> 
                    <a className="link link-hover text-base hover:text-error">Jobs</a> 
                    <a className="link link-hover text-base hover:text-error">Press kit</a>
                </div> 
                <div>
                    <span className="text-xl font-semibold">Social Link</span> 
                    <div className='flex gap-6 text-xl'>
                    <Link className='hover:text-error' to='https://www.facebook.com/'><FaFacebook></FaFacebook></Link>
                    <Link className='hover:text-error' to='https://www.twitter.com/'><FaTwitter></FaTwitter></Link>
                    <Link className='hover:text-error' to='https://www.instagram.com/'><FaInstagram></FaInstagram></Link>
                    <Link className='hover:text-error' to='https://www.linkedin.com/'><FaLinkedinIn></FaLinkedinIn></Link>
                    </div>
                </div>
            </footer>
            <div className='bg-gray-800 text-center'>
                <p className='py-4 text-white'>&copy;Copyright All right reserved | <strong className='text-error'>Pitam Chandra</strong></p>
            </div>
        </div>
    );
};

export default Footer;