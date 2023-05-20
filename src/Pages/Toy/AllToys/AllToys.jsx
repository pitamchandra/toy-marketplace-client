import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";


const AllToys = () => {

    const allToys = useLoaderData()

    return (
        <div className="container mx-auto px-3 md:px-0 my-10">
            <h2 className="text-2xl font-bold mb-6">All Toys : {allToys.length}</h2>
            <div className="md:w-2/4 mx-auto relative mb-10">
                <input type="text" name="" placeholder="search" className="border border-gray-500 w-full p-3"/>
                <button className="btn btn-error absolute top-0 right-0 rounded-none text-white px-7">search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table text-center w-full">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        allToys.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllToys;