import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import useReviews from '../Hook/useReviews';
import './Home.css'


const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate()


    return (
        <>
            <div className='background'>
                <div className='w-5/6 mx-auto grid md:grid-cols-2'>
                    <div></div>
                    <div className='text-white md:mt-72'>
                        <h1 className='text-4xl md:text-8xl font-bold mt-8 mb-2  md:mb-4 md:mt-16'>Click Camera</h1>
                        <h3 className='text-lg md:text-2xl  font-semibold mb-2'>Just click to get all the review of product</h3>
                        <p className='md:pr-72'>This is product analysis website, where you will get all the review of product that you need, special review of camera.</p>
                        <button className='border-2 mt-4 md:mt-8 px-6 py-1 hover:bg-[#ffb4b4] hover:text-black font-bold'>Click</button>
                    </div>
                </div>
            </div>

            <div className='w-5/6 mx-auto'>
                <h1 className='text-center text-4xl my-12  font-extrabold'>Reviews</h1>
                <div className='grid md:grid-cols-3 gap-10'>
                    {reviews.slice(0, 3).map(review => <HomeReview
                        key={review.id}
                        review={review}
                    />)}
                </div>
            </div>
            <div className='flex justify-center my-8 md:my-20'>
                <button onClick={() => navigate('/reviews')} className=' text-lg border-2 md:mt-8 px-6 py-2 md:py-4 border-[#ffb4b4] hover:bg-[#ffb4b4] hover:text-black font-bold'>All Reviews</button>
            </div>

        </>
    );
};

export default Home;