import React from 'react';
import stars from '../../assets/icons/stars.png'
import img1 from '../../assets/icons/flag.png'
import star from '../../assets/icons/star.png'
import starG from '../../assets/icons/star-gray.png'

const BuyerReview = () => {
    return (
        <section className='bg-white min-h-screen'>


            {/* ----------------suplier services---------------- */}
            <div className='my-8'>
                <h1 className='text-black font-bold text-2xl mb-4'>Supplier Service</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[900px]'>
                    <div className='md:col-span-1 grid grid-cols-1 gap-4'>
                        <h1 className='text-5xl text-gray-600 font-bold'>4.0</h1>
                        <img className='w-32' src={stars} alt="" />
                        <h1 className='text-xl text-gray-500 font-bold'>35 Reviews</h1>
                    </div>

                    <div className='md:col-span-2 grid grid-cols-1 gap-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>5</h1>
                            <img className='w-5' src={star} alt="" />
                            <div className="w-full bg-gray-200 rounded-full h-5">
                                <div className="bg-[#FF6600] h-5 rounded-full w-[100%]"></div>
                            </div>
                            <h1 className='text-black font-bold text-xl'>5</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>4</h1>
                            <img className='w-5' src={star} alt="" />
                            <div className="w-full bg-gray-200 rounded-full h-5">
                                <div className="bg-[#FF6600] h-5 rounded-full w-[80%]"></div>
                            </div>
                            <h1 className='text-gray-300 font-bold text-xl'>4</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>3</h1>
                            <img className='w-5' src={starG} alt="" />
                            <div className="w-full bg-gray-200 rounded-full h-5">
                                <div className="bg-[#FF6600] h-5 rounded-full w-[60%]"></div>
                            </div>
                            <h1 className='text-gray-300 font-bold text-xl'>3</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>2</h1>
                            <img className='w-5' src={starG} alt="" />
                            <div className="w-full bg-gray-200 rounded-full h-5">
                                <div className="bg-[#FF6600] h-5 rounded-full w-[0%]"></div>
                            </div>
                            <h1 className='text-gray-300 font-bold text-xl'>0</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>1</h1>
                            <img className='w-5' src={starG} alt="" />
                            <div className="w-full bg-gray-200 rounded-full h-5">
                                <div className="bg-[#FF6600] h-5 rounded-full w-[0%]"></div>
                            </div>
                            <h1 className='text-gray-300 font-bold text-xl'>0</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='w-full h-fit md:h-16 py-4 px-4 md:py-0 bg-[#0029FF14] rounded-md flex flex-col md:flex-row justify-start md:items-center gap-4'>
                    <h1 className='text-xl text-gray-600'>Filter:</h1>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="view" id="all" />
                        <label htmlFor='all' id='all' className='text-xl text-gray-900'>All</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="view" id="positive" />
                        <label htmlFor='positive' id='positive' className='text-xl text-gray-900'>Positive Review</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="view" id="negetive" />
                        <label htmlFor='negetive' id='negetive' className='text-xl text-gray-900'>Negative Review</label>
                    </div>
                </div>


                <div className='grid grid-cols-1 gap-6 mt-6'>

                    <div className='flex items-center gap-8 md:gap-44'>
                        <div className='grid grid-cols-1 gap-1'>
                            <h1 className='text-xl font-bold text-black'>Nikolas410</h1>
                            <div className='flex justify-start items-center gap-3'>
                                <img className='w-7' src={img1} alt="" />
                                <h1 className='text-sm font-bold text-black'>USA</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-1'>
                            <img className='w-24' src={stars} alt="" />
                            <h1 className='text-gray-600'>Very good</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-8 md:gap-44'>
                        <div className='grid grid-cols-1 gap-1'>
                            <h1 className='text-xl font-bold text-black'>Nikolas410</h1>
                            <div className='flex justify-start items-center gap-3'>
                                <img className='w-7' src={img1} alt="" />
                                <h1 className='text-sm font-bold text-black'>USA</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-1'>
                            <img className='w-24' src={stars} alt="" />
                            <h1 className='text-gray-600'>Very good</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-8 md:gap-44'>
                        <div className='grid grid-cols-1 gap-1'>
                            <h1 className='text-xl font-bold text-black'>Nikolas410</h1>
                            <div className='flex justify-start items-center gap-3'>
                                <img className='w-7' src={img1} alt="" />
                                <h1 className='text-sm font-bold text-black'>USA</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-1'>
                            <img className='w-24' src={stars} alt="" />
                            <h1 className='text-gray-600'>Very good</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyerReview;