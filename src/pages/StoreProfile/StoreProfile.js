import { Avatar, Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StoreHome from '../../components/storeProfileComponents/StoreHome';
import TopRankingProducts from '../../components/storeProfileComponents/TopRankingProducts';
const tabs = [
    { id: "1", title: "", name: "Home" },
    { id: "2", title: "Popular Products", name: "Popular" },
    { id: "3", title: "Top Ranking Products", name: "Top Ranking" },
    { id: "4", title: "Latest Products", name: "Latest Products" },
    { id: "5", title: "", name: "About" }
]

const StoreProfile = () => {
    const data = useLoaderData()
    const [selectedTab, setSelectedTab] = useState({ id: "1", title: "", name: "Home" })
    // console.log(data);
    return (
        <div className='max-w-primary px-4 mx-auto min-h-screen'>
            <div className='relative' >
                <img className='w-full h-72 object-fill z-10' src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt="" />

                <div className='flex items-end gap-6 absolute -bottom-20 left-12 z-50'>
                    <Avatar className='w-32 h-32 bg-white border border-black' src={data?.logo} />
                    <div className='mb-4' >
                        <Typography variant="h4" >{data?.name}</Typography>
                        <Typography variant="small" >https://www.wonderbox/{data?.username}</Typography>
                    </div>
                </div>
            </div>

            <div className='flex items-center mt-32 overflow-x-auto border-b' >
                {
                    tabs.map(item => (
                        <Button
                            key={item?.id}
                            onClick={() => setSelectedTab(item)}
                            className={`w-fit rounded-none shadow-none hover:shadow-none bg-transparent h-12 duration-300
                        ${selectedTab?.id === item?.id ? "border-b border-primary text-primary"
                                    : "text-black"
                                }`}>
                            {item.name}
                        </Button>
                    ))
                }
            </div>

            <div className='mt-6'>
                <Typography className="h2" >{selectedTab?.title}</Typography>
                <div className='mt-6'>
                    {selectedTab?.id === "1" && <StoreHome storeId={data?._id} />}
                    {selectedTab?.id === "3" && <TopRankingProducts storeId={data?._id} />}
                </div>
            </div>

        </div>
    );
};

export default StoreProfile;