

const ToyRow = ({toy}) => {
    const {name, category, userName, price , quantity} = toy
    return (
        <tr>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyRow;