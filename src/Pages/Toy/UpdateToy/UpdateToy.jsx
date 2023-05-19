import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const UpdateToy = () => {
    const {_id, description, price, quantity} = useLoaderData()

    const handleUpdateToy = e =>{
        e.preventDefault()
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {
            price,
            description,
            quantity
        }
        fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast('Toy Updated Successfully!')
            }
        })
    }

    return (
        <div className="container mx-auto my-10">
            <form onSubmit={handleUpdateToy} className="border-2 p-10 border-error shadow shadow-error">
                <h3 className="text-center text-3xl text-error font-semibold mb-4">Update Toy Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="name">Toy Price</label>
                        <input type="text" name="price" defaultValue={price} placeholder="toy price" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                    <div className="mb-5">
                        <label className="font-bold" htmlFor="name">Available Quantity</label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="w-full border-gray-500 border-2 p-2 mt-2" required />
                    </div>
                </div>
                <div className="mb-5">
                    <label className="font-bold" htmlFor="description">Description</label>
                    <textarea name="description" defaultValue={description} id="" cols="30" rows="6" placeholder="type toy description" className="w-full border-gray-500 border-2 p-2 mt-2" required></textarea>
                </div>
                <input type="submit" value="Update a Toy" className="w-full btn btn-error text-white mt-2"/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateToy;