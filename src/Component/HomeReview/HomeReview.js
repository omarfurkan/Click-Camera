import React from 'react';

const HomeReview = ({ review }) => {
    return (
        <div className='border-4 border-[#FFB4B4]'>
            <div className='flex  flex-column justify-center'>
                <img className='h-80 w-full' src={review.img} alt="" />

            </div>
            <div className='text-center relative'>
                <div className='absolute left-24 bottom-[170px] md:bottom-28 md:left-48 '>
                    <img className='rounded-[50%] border-4 border-[#FFB4B4] w-32 h-32' src={review.customerImg} alt="" />
                </div>
                <div className='pt-28 mb-4'>
                    <h1 className='text-2xl font-bold'>{review.name}</h1>
                    <h3>Review: {review.comment}</h3>
                    <p>Rating: <span className='font-bold'>{review.rating}</span> </p>
                    <p> <span className='text-gray-400'>{review.customerName}</span></p>
                </div>
            </div>

        </div>
    );
};

export default HomeReview;