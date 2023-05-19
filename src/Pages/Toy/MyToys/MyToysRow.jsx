import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const MyToysRow = ({toy}) => {
    const {name, price, userName, email, photo, rating,quantity} = toy;
    return (
        <tr>
            <td>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>
                <div className="font-bold">{userName}</div>
                <div className="text-sm opacity-50">{email}</div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td><Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-error"></FaStar>}
                    fullSymbol={<FaStar className="text-error"></FaStar>}
                    readonly
                />
                <span className="ml-2">{rating}</span></td>
            <td>{quantity}</td>
            <th>
            <button className="btn btn-primary text-white mr-3 btn-xs">update</button>
            <button className="btn btn-error text-white btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;