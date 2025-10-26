import React from 'react';
// import Lottie from 'lottie-react';
// import errorAnimation from '../assets/404.json'

const Error = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
            <div className='text-center px-4'>
                <h2 className='font-bold text-5xl text-black'>404</h2>
                <h2 className='font-bold text-2xl text-black mt-2'>Page not Found!!</h2>
                <div className='w-72 sm:w-96 mx-auto my-8'>
                    {/* <Lottie animationData={errorAnimation} loop={true} /> */}
                </div>
            </div>
        </div>
    );
};

export default Error;