import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";


const AllToys = () => {

    const allToys = useLoaderData()

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-6">All Toys : {allToys.length}</h2>
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