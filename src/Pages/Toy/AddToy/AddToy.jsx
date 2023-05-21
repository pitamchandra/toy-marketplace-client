import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const AddToy = () => {
    document.title = 'SuperToy | Add Toys'
    const {user} = useContext(AuthContext)

    const handleAddToy = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const toy = {
            name,
            photo,
            userName,
            email,
            price : parseInt(price),
            rating,
            quantity,
            category,
            description
        }
        console.log(toy);
        fetch('https://super-car-toy-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast('toy added successful !')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="container mx-auto px-3 md:px-0 my-10">
            <h3 className="text-center text-3xl text-white py-3 font-semibold bg-error">Add a Toy</h3>
            <form onSubmit={handleAddToy} className="border-2 p-10 border-error bg-red-100 shadow shadow-error">
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="name">Toy Name</label>
                        <input type="text" name="name" placeholder="toy name" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="name">Picture URL</label>
                        <input type="text" name="photo" placeholder="photo url" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="userName">User Name</label>
                        <input type="text" name="userName" placeholder="user name" defaultValue={user?.displayName} className="w-full border-gray-500 border-2 p-2 mt-2" readOnly />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="email">User Email</label>
                        <input type="text" name="email" placeholder="user email" defaultValue={user?.email} className="w-full border-gray-500 border-2 p-2 mt-2" readOnly />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="price">Toy Price</label>
                        <input type="number" name="price" placeholder="toy price" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="number">Rating</label>
                        <input type="number" min={0} max={5} name="rating" placeholder="rating" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="text">Available Quantity</label>
                        <input type="text" name="quantity" placeholder="quantity" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="category">Category</label>
                        <select className="w-full border-gray-500 border-2 p-2 mt-2" name="category" id="">
                            <option value="">select a category</option>
                            <option value="sports">sports</option>
                            <option value="police">police</option>
                            <option value="fire">fire</option>
                            <option value="truck">truck</option>
                            <option value="bus">bus</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="font-bold" htmlFor="description">Description</label>
                    <textarea name="description" id="" cols="30" rows="6" placeholder="type toy description" className="w-full border-gray-500 border-2 p-2 mt-2" required></textarea>
                </div>
                <input type="submit" value="Add a Toy" className="w-full btn btn-error text-white mt-2"/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddToy;