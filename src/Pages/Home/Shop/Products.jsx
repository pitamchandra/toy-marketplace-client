import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const Products = ({category}) => {
    const {_id, photo, price, description, rating, name} = category;
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className="card w-full bg-base-100 border-error duration-500 hover:bg-violet-100 hover:border-violet-600 border-2 shadow-xl">
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
                <Link to={`/allToys/${_id}`}><button className="btn btn-error text-white">view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;