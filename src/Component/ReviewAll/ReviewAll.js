import React from 'react';

const ReviewAll = ({ review }) => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 border-4 border-[#ffb4b4] items-center mb-8 md:mb-24'>
            <div>
                <img className='md:h-96' src={review.img} alt="" />
            </div>
            <div className='md:col-span-2'>
                <div className='flex justify-center'>
                    <img className='w-40 h-40 border-8 border-[#ffb4b4] rounded-[50%]' src={review.customerImg} alt="" />
                </div>
                <div className='text-center md:mt-12'>
                    <h1 className='text-xl md:text-4xl font-bold my-2'>{review.name}</h1>
                    <p className='md:text-xl font-bold my-2'>{review.comment}</p>
                    <p className='md:text-2xl font-bold my-2'>Reviews: {review.rating} </p>
                    <p className='text-sm md:text-xl font-bold my-2 text-gray-400'>{review.customerName}</p>
                </div>
            </div>
        </div>

    );
};

export default ReviewAll;