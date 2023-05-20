import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() =>{
        fetch(`https://super-car-toy-server.vercel.app/allToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error=>console.log(error))

    }, [user])
   
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://super-car-toy-server.vercel.app/allToys/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining)
                        Swal.fire(
                            'Deleted Successfully!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
          })
    }

    

    return (
        <div className="container mx-auto px-3 md:px-0 my-10">
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
                        <th>Category</th>
                        <th>Available</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysRow>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyToys;