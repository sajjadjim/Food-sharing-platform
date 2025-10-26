import React, { use } from 'react';
import Banner from './Banner';
import Review from './Review';
import HowItWorks from './HowItWorks';
import FeaturedFood from './FeaturedFood';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import FoodGallery from './FoodGallary';
import ContactUs from './ContactUs';

    const foodPromise = fetch('https://food-sharing-platform-server.vercel.app/foods').then(res => res.json())

const Home = () => {
    const {user}=use(AuthContext);
    console.log('user access token',user?.accessToken)
    return (
        <div className='bg-[#dddbdb]'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            
        <FeaturedFood foodPromise={foodPromise}></FeaturedFood>
        <FoodGallery></FoodGallery>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;