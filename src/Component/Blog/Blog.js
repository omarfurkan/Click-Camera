import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 md:w-4/12 mx-auto mt-8 '>
            <h1 className=' text-4xl text-center  font-extrabold mb-6'>Ques / Ans</h1>
            <h1 className='text-2xl font-bold my-2'>Quse 1. What is Context API or Purpose of API</h1>
            <p><span className='font-bold'>Ans:</span> The Context API is a React structure that enables use to exchange unique details and assists in solving props-drilling from all levels of our applicaion</p>
            <p>React context  allows us to pass down and use (consume) data in whatever component we need in our Reac app without using props.</p>
            <p>React context is great when you are passing data that can be sued in any component in our applicaion</p>
            <p>These types of data include: </p>
            <ul className='list-disc ml-8'>
                <li>Theme data (like dark or light mode)</li>
                <li>User data (the currently authenticated user)</li>
                <li>Location-spedific data (like user language or locale)</li>
            </ul>
            <h1 className='text-2xl font-bold my-2'>Ques 2. What is Semantic Tag</h1>
            <p> <span className='font-bold'>Ans:</span> The HTML semantics refers to the tags that provide meaing to an HTML page rather than just presontaion.It make HTML more comprehesible by better defining the different sections and layout of web pages</p>
            <p>A semantic element clearly describes its meaning to both the browser and the developer</p>
            <p>Examples:</p>
            <ul className='list-disc ml-8'>
                <li>form</li>
                <li>table</li>
                <li>article</li>
                <li>section</li>
                <li>header</li>
                <li>footer</li>
                <li>main etc</li>
            </ul>
            <h1 className='text-2xl font-bold my-2'>Ques 3. Difference between inline and block elements </h1>
            <p><span className='font-bold'>Ans:</span> By default, inline elements do not force a new line to begin in the document flow. Block elements, on the other hand typically cause a line break to occur</p>
            <ol className='list-decimal ml-8 mb-12'>
                <li>Inline elements occupy only sufficient width requried.Block lements occupy the full width irrespective of their suffieiency.</li>
                <li>Inline elements don't start in a new line. Block element always start in a line</li>
                <li>Inline elements allow other inline elements to sit behind. Block elements doen't allow other elements to sit behind</li>
                <li>Inline elements don't have top and bottom margin. Block element have top and bottom margin.</li>
            </ol>
        </div>
    );
};

export default Blog;