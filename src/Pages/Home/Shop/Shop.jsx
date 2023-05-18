import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
    const toy = <>
                        <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://media.istockphoto.com/id/1024366752/photo/red-toy-car-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=fruDDTOFbc6zDsqUoftbi3G78GkkSrE5ewPnij72jU4=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
    </>
    return (
        <div className='container mx-auto'>
            <h2 className="text-center text-4xl font-bold mb-8">Shopping</h2>
            <Tabs>
                <TabList>
                <Tab>sports car</Tab>
                <Tab>truck</Tab>
                <Tab>fire truck</Tab>
                <Tab>police car</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            toy
                        }
                        {
                            toy
                        }
                        {
                            toy
                        }
                        {
                            toy
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;