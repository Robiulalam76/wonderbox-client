import { Avatar, Typography } from '@material-tailwind/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StoreProfile = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='max-w-primary px-4 mx-auto min-h-screen'>
            <div className='relative' >
                <img className='w-full h-72 object-fill z-10' src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt="" />
                <div className='flex items-end gap-6 absolute -bottom-20 left-10 z-50'>
                    <Avatar className='w-32 h-32 bg-white border border-black' src={data?.logo} />
                    <div className='mb-4' >
                        <Typography variant="h4" >{data?.name}</Typography>
                        <Typography variant="small" >https://www.wonderbox/{data?.username}</Typography>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StoreProfile;