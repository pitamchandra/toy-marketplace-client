

const Contact = () => {
    return (
        <div className="my-12">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-5 bg-slate-300 p-12 items-center">
                <figure><img src="https://media.istockphoto.com/id/1024366752/photo/red-toy-car-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fruDDTOFbc6zDsqUoftbi3G78GkkSrE5ewPnij72jU4=" alt="Album"/></figure>
                    <form className="">
                        <div className="mb-6">
                            <label htmlFor="name" className="text-xl mb-4">Your Name</label>
                            <input className="w-full mt-2 p-3" type="text" name="name" placeholder="Type your name"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-xl mb-4">Your Email</label>
                            <input className="w-full mt-2 p-3" type="email" name="email" placeholder="Type your email"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-xl mb-4">Your Name</label>
                            <textarea  className="w-full mt-2 p-3" name="message" id="" cols="30" rows="5"></textarea>
                        </div>
                        <input className="btn btn-error text-white w-full" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;