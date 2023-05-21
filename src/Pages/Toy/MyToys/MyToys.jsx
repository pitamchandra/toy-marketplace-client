import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const MyToys = () => {
    document.title = 'SuperToy | My Toys'
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        fetch(`https://super-car-toy-server.vercel.app/myToys?email=${user?.email}`, {
            method : 'GET',
            headers : {
                authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setToys(data)
            }
            else{
                toast('your token expired, login again')
                navigate('/')
            }
                
        })
        .catch(error=>console.log(error))

    }, [user,navigate])
   
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyToys;