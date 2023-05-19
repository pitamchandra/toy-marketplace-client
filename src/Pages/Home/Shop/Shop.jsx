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
        <div className='container mx-auto'>
            <h2 className="text-center text-4xl font-bold mb-8">Shopping</h2>
            <Tabs>
                <TabList>
                    <Tab>sports car</Tab>
                    <Tab>Truck</Tab>
                    <Tab>fire car</Tab>
                    <Tab>bus</Tab>
                    <Tab>police car</Tab>
                </TabList>

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
            </Tabs>
        </div>
    );
};

export default Shop;