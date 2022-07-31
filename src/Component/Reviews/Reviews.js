import React from 'react';
import useReviews from '../Hook/useReviews';
import ReviewAll from '../ReviewAll/ReviewAll';


const Reviews = () => {
    const [reviews,] = useReviews();

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-2xl md:text-4xl font-extrabold mt-4 md:mt-12'>Total Reviews: {reviews.length}</h1>
            <div className=' mt-8 md:mt-20'>
                {reviews.map(review => <ReviewAll
                    key={review.id}
                    review={review} />)}
            </div>
        </div>
    );
};

export default Reviews; 