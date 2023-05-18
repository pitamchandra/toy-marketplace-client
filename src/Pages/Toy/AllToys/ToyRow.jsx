import { Link } from "react-router-dom";


const ToyRow = ({toy}) => {
    const {name, category, userName, price , quantity, _id} = toy
    return (
        <tr>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
            <Link to={`/allToys/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default ToyRow;