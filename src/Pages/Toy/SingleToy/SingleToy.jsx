import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";


const SingleToy = () => {
    const { description, email, name, photo, price, quantity, rating, userName} = useLoaderData()
    return (
        <div className="container mx-auto ">
            <div className="md:w-2/4 mx-auto rounded-lg my-10 p-10 border-2 border-indigo-600">
                <div>
                    <img src={photo} className="w-full rounded-lg shadow-2xl" />
                    <div className="mt-3">
                        <div className="flex justify-between mb-4 mt-6">
                            <div>
                                <h2 className="text-lg font-bold">{userName}</h2>
                                <p className="">{email}</p>
                            </div>
                            <p className="my-2">
                                <Rating
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-error"></FaStar>}
                                    fullSymbol={<FaStar className="text-error"></FaStar>}
                                    readonly
                                />
                                <span className="ml-2">{rating}</span>
                            </p>
                        </div>
                        <hr />
                        <h1 className="text-xl mt-4 font-bold capitalize">Toy Name: {name}</h1>
                        <p className="my-2"><strong>Price:</strong> ${price}</p>
                        <p className="my-2"><strong>Available Quantity:</strong> {quantity}</p>
                        <p className="my-2">{description}</p>
                        <button className="btn btn-error text-white">see more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;