
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-200 text-base-content">
                <div>
                    <img className='w-24' src={logo} alt="logo" />
                    <p><strong>Supper Car Toy LTD.</strong></p>
                    <p>Providing best smart toy since 2001. <br /> Discover the thrilling world of <br /> toy cars at our website!</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">sports car</a> 
                    <a className="link link-hover">truck</a> 
                    <a className="link link-hover">regular car</a> 
                    <a className="link link-hover">mini fire truck</a>
                </div> 
                <div>
                    <span className="footer-title">Links</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Social Link</span> 
                    <div className='flex gap-6 text-xl'>
                    <Link to=''><FaFacebook></FaFacebook></Link>
                    <Link to=''><FaTwitter></FaTwitter></Link>
                    <Link to=''><FaInstagram></FaInstagram></Link>
                    <Link to=''><FaLinkedinIn></FaLinkedinIn></Link>
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