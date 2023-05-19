import React, { useContext, useEffect } from 'react';
import love from '../../assets/icons/lovew.png'
import love2 from '../../assets/icons/love.png'
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';


const ProductCard = ({ product }) => {


    return (
        <div className="border border-gray-600/20 bg-white" id='box-shadow' >
            <div className='relative w-full h-40 overflow-hidden bg-slate-200 bg-gray-100'>
                <img className='h-full mx-auto object-cover' src={product?.image} alt="" />
            </div>

            <Link to={`/products/${product?._id}`}
                className="grid grid-cols-1 gap-2 p-3">
                <div className="flex flex-col-reverse justify-start md:flex-row md:items-center md:justify-between">
                    <h1 className="flex-grow font-bold text-gray-800 md:text-[18px]">{product?.title.slice(0, 30)}</h1>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                        <span className="text-sm text-gray-900">5.0</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    {
                        product?.features.map((feature, i) => (
                            <li>{feature}</li>
                        ))
                    }
                </div>

                <div className='flex items-center justify-between'>
                    <h1 className='text-gray-800 text-2xl font-bold text-left'>₹ {product?.price}</h1>

                    <Link to={`/products/${product?._id}`}>
                        <Button>View Details</Button>
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;