import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Products from './Products';

const Shop = () => {

    const [allToys, setToys] = useState([])

    useEffect(()=>{
        fetch(`https://super-car-toy-server.vercel.app/allToys`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])

    const truck = allToys?.filter(toy => toy.category === "truck")
    const bus = allToys?.filter(toy => toy.category === "bus")
    const police = allToys?.filter(toy => toy.category === "police")
    const fire = allToys?.filter(toy => toy.category === "fire")
    const sports = allToys?.filter(toy => toy.category === "sports")


    return (
        <div className='px-3 md:px-0 mt-10'>
            <h2 className="text-center text-4xl font-bold mb-2">Shopping</h2>
            <div className="w-20 m-auto border-t-2 mb-10 border-error"></div>
            <Tabs>
                <div className='bg-red-500 text-center rounded-t-2xl capitalize font-semibold pt-3 text-white'>
                <TabList>
                    <Tab>sports car</Tab>
                    <Tab>Truck</Tab>
                    <Tab>fire car</Tab>
                    <Tab>bus</Tab>
                    <Tab>police car</Tab>
                </TabList>
                </div>

                <div className='container mx-auto'>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {
                            sports.map(category => <Products
                                key={category._id}
                                category={category}
                            ></Products>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {
                            truck.map(category => <Products
                                key={category._id}
                                category={category}
                            ></Products>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {
                            fire.map(category => <Products
                                key={category._id}
                                category={category}
                            ></Products>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {
                            bus.map(category => <Products
                                key={category._id}
                                category={category}
                            ></Products>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {
                            police.map(category => <Products
                                key={category._id}
                                category={category}
                            ></Products>)
                        }
                    </div>
                </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Shop;