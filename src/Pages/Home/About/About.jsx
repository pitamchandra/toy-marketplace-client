import { Link } from "react-router-dom";
import VideoPlayer from "../../../component/VideoPlayer";


const About = () => {
    return (
        <div className="container mx-auto px-3 md:px-0 my-12">
            <h2 className="text-center text-4xl font-bold mb-2">About Us</h2>
            <div className="w-20 m-auto border-t-2 mb-10 border-error"></div>
            <div className="grid md:grid-cols-2 items-center gap-6 ">
                <div data-aos="slide-right" data-aos-duration="1000" className="bg-gray-500 text-white p-10 rounded-tr-2xl rounded-bl-2xl  border-r-8 border-b-8 border-error ">
                    <h2 className="text-4xl font-bold mb-2">Our History</h2> 
                    <div className="w-20 border-t-2 mb-4 border-error"></div>
                    <p className="pr-5 mb-3">Welcome to Super Car Toy, where the joy of play meets the thrill of wheels! 🚗✨</p>
                    <p>At Super Car Toy, we are not just in the business of selling toy cars; we're dedicated to creating unforgettable moments of fun and adventure for kids of all ages. Our passion for play and commitment to quality drive everything we do.</p>
                    <div className="brand_button mt-6">
                        <Link to='/about' className="btn_text">Learn More</Link>
                        <span className="btn_design"></span>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="3000" className="w-11/12 ms-auto border-l-8 border-error border-b-8 rounded-tl-2xl rounded-br-2xl overflow-hidden">
                    <VideoPlayer></VideoPlayer>
                </div>
                {/* <img src="https://media.istockphoto.com/id/1024366752/photo/red-toy-car-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fruDDTOFbc6zDsqUoftbi3G78GkkSrE5ewPnij72jU4=" alt="" /> */}
            </div>
        </div>
    );
};

export default About;