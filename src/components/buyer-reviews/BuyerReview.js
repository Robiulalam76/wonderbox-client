import React, { useEffect, useState } from 'react';
import stars from '../../assets/icons/stars.png'
import img1 from '../../assets/icons/flag.png'
// import star from '../../assets/icons/star.png'
import starG from '../../assets/icons/star-gray.png'
import { Button, Progress, Radio, Rating, Typography } from '@material-tailwind/react';
import SendReview from './SendReview';

const star = <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#f3da35"></path> </svg>

const BuyerReview = ({ productId }) => {
    const [reviews, setReviews] = useState([])
    const [filteredReviews, setFilteredReviews] = useState(reviews?.reviews);
    const [showAll, setShowAll] = useState(true);
    const [positive, setPositive] = useState(false);
    const [nagetive, setNageive] = useState(false);

    const refetch = () => {
        fetch(`http://localhost:5000/api/review/${productId}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                handleAllClick()
            })
    }


    const handlePositiveClick = () => {
        const positiveReviews = reviews?.reviews.filter((review) => review.isPositive);
        setFilteredReviews(positiveReviews);
        setPositive(true)
        setNageive(false)
        setShowAll(false)
    };

    const handleNegativeClick = () => {
        const negativeReviews = reviews?.reviews.filter((review) => !review.isPositive);
        setFilteredReviews(negativeReviews);
        setNageive(true)
        setPositive(false)
        setShowAll(false)
    };

    const handleAllClick = () => {
        setShowAll(true)
        setNageive(false)
        setPositive(false)
        setFilteredReviews(reviews?.reviews);
    };

    useEffect(() => {
        refetch()
    }, [productId])

    return (
        <section className='bg-white min-h-screen'>


            {/* ----------------suplier services---------------- */}
            <div className='my-8'>
                <h1 className='text-black font-bold text-2xl mb-4'>Supplier Service</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[900px]'>
                    <div className='md:col-span-1 grid grid-cols-1 gap-4'>
                        <h1 className='text-5xl text-gray-600 font-bold'>{reviews?.averageRating}</h1>
                        <div className="flex items-center gap-1">
                            <Rating value={reviews?.averageRating} readonly />
                            <Typography color="blue-gray" className="mt-1">
                                ({reviews?.averageRating}) Read reviews
                            </Typography>
                        </div>
                        <h1 className='text-xl text-gray-500 font-bold'>{reviews?.totalReviews} Reviews</h1>
                    </div>

                    <div className='md:col-span-2 grid grid-cols-1 gap-2'>


                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>5</h1>

                            <span className='text-amber-500'>
                                {star}
                            </span>
                            <Progress value={reviews?.ratingPercentages?.e}
                                label="Completed" color="amber" size='lg' className='w-full md:w-[476px]' />
                            <h1 className='text-black font-bold text-xl'>{reviews?.ratingPercentages?.e}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>4</h1>
                            <span className='text-amber-500'>
                                {star}
                            </span>

                            <Progress value={reviews?.ratingPercentages?.d}
                                label="Completed" color="amber" size='lg' className='w-full md:w-[476px]' />
                            <h1 className='text-gray-300 font-bold text-xl'>{reviews?.ratingPercentages?.d}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-white rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>3</h1>
                            <img className='w-5' src={starG} alt="" />
                            <Progress value={reviews?.ratingPercentages?.c}
                                label="Completed" color="amber" size='lg' className='w-full md:w-[476px]' />
                            <h1 className='text-gray-300 font-bold text-xl'>{reviews?.ratingPercentages?.c}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>2</h1>
                            <img className='w-5' src={starG} alt="" />
                            <Progress value={reviews?.ratingPercentages?.b}
                                label="Completed" color="amber" size='lg' className='w-full md:w-[476px]' />
                            <h1 className='text-gray-300 font-bold text-xl'>{reviews?.ratingPercentages?.b}</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                            <h1 className='text-black font-bold text-xl'>1</h1>
                            <img className='w-5' src={starG} alt="" />
                            <Progress value={reviews?.ratingPercentages?.a}
                                label="Completed" color="amber" size='lg' className='w-full md:w-[476px]' />
                            <h1 className='text-gray-300 font-bold text-xl'>{reviews?.ratingPercentages?.a}</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='w-full h-fit md:h-16 py-4 px-4 md:py-0 bg-blue-50 rounded-sm flex flex-col md:flex-row justify-start md:items-center gap-4'>
                    <h1 className='text-xl text-gray-900'>Filter:</h1>

                    <Radio id="All" name="type" label="All"
                        onClick={() => handleAllClick()} defaultChecked={showAll} />
                    <Radio id="Positive_Review" name="type" label="Positive Review"
                        onClick={() => handlePositiveClick()} defaultChecked={positive} />
                    <Radio id="Negative_Review" name="type" label="Negative Review"
                        onClick={() => handleNegativeClick()} defaultChecked={nagetive} />
                </div>


                <div className='grid grid-cols-1 gap-6 mt-6'>

                    {
                        filteredReviews && filteredReviews.map((review, i) => (
                            <div className='rounded-md border'>
                                <div className='flex justify-between items-center border-b p-2 md:py-4 md:px-6'>
                                    <div class="flex justify-start items-center flex-row space-x-2.5">
                                        <div>
                                            <img className='w-12 h-12 rounded-full object-cover' src={review?.reviewerId?.image} alt={review?.reviewerId?.name} />
                                        </div>
                                        <div class="flex flex-col justify-start items-start space-y-2">
                                            <p class="text-base font-medium leading-none text-gray-800">
                                                {review?.reviewerId?.name}
                                            </p>
                                            <p class="text-sm leading-none text-gray-600">{new Date(review?.createdAt).toLocaleDateString('en-GB')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Rating value={review?.rating} readonly />
                                        <Typography color="blue-gray" className="mt-1">
                                            ({review?.rating}) Rating
                                        </Typography>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 p-2 md:py-4 md:px-6'>
                                    <div className='flex items-center gap-2'>
                                        <Typography className="font-bold" >{review?.title} </Typography>
                                        <Button className={`rounded-2xl text-xs py-1 w-fit px-1
                                    ${review?.isPositive ? "bg-green-300" : "bg-yellow-200"}`} >{review?.isPositive ? "Positive" : "Nagetive"}</Button>
                                    </div>
                                    <Typography className="text-gray-600 font-normal" >{review?.comment}</Typography>
                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>


            <SendReview productId={productId} refetch={refetch} />

        </section>
    );
};

export default BuyerReview;