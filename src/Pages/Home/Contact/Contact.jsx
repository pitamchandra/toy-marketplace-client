

const Contact = () => {
    return (
        <div className="my-12">
            <div className="">
                <h2 className="text-center text-4xl font-bold mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-2 bg-slate-300 items-center">
                    <img data-aos="fade-right" data-aos-duration="4000" className="h-full" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Album"/>
                    <form className="p-12">
                        <div className="mb-4">
                            <label htmlFor="name" className="text-lg mb-3">Your Name</label>
                            <input className="w-full mt-2 p-2" type="text" name="name" placeholder="Type your name"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-lg mb-3">Your Email</label>
                            <input className="w-full mt-2 p-2" type="email" name="email" placeholder="Type your email"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="text-lg mb-3">Your Name</label>
                            <textarea  className="w-full mt-2 p-2" name="message" placeholder="type your message" id="" cols="30" rows="3"></textarea>
                        </div>
                        <input className="btn btn-error text-white w-full" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;