import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error=>console.log(error))

    }, [user])
    console.log(toys);

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-2xl mb-6 font-semibold">My Toys : {toys.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>User Info</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                        ></MyToysRow>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyToys;