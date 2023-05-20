

const Gallery = () => {
    return (
        <div className="bg-violet-200 py-8">
            <div className="container mx-auto px-3 md:px-0 my-12 ">
                <h2 className="text-center text-4xl font-bold mb-8">Gallery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://demoopc.aeipix.com/AX02/mixeat22/shop1/image/cache/catalog/4-1012x1000.jpg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://www.ridemakerz.com/uploads/1/3/4/0/134067726/s338931909844079479_p287_i1_w1150.jpeg?width=2400&optimize=medium" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://img.fruugo.com/product/4/38/173634384_max.jpg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://images.othoba.com/images/thumbs/0282735_radio-remote-control-car.jpeg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://images-na.ssl-images-amazon.com/images/I/61qkh%2BlkwdL.jpg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://m.media-amazon.com/images/I/61lzmE8aTRL._SY450_.jpg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://media.istockphoto.com/id/120758576/photo/color-toy-car.jpg?s=612x612&w=0&k=20&c=ZBsd6JPQ3uuNGpnSDTU1OWtEVNv01tW-YZ4Is7gsno4=" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="w-full h-80" src="https://i.ebayimg.com/images/g/0yAAAOSwmFNfvZqt/s-l500.jpg" alt="" />
                        <div className="absolute w-full h-full opacity-0 hover:opacity-30 top-0 left-0 duration-500 bg-gradient-to-t from-[#000] to-[#000]"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;