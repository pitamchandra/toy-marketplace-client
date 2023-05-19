import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const Products = ({category}) => {
    const {photo, price, description, rating, name} = category;
    return (
        <div className="card w-full bg-base-100 border-error border-2 shadow-xl">
            <figure><img className="w-full" src={photo} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{name}</h2>
                <p><strong>Price :</strong> : ${price}</p>
                <p><strong>Rating :</strong> <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-error"></FaStar>}
                    fullSymbol={<FaStar className="text-error"></FaStar>}
                    readonly
                />
                <span className="ml-2">{rating}</span></p>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn btn-error text-white">view details</button>
                </div>
            </div>
        </div>
    );
};

export default Products;