import React from 'react';
import { Route } from 'react-router';
import StartingWidget from '../pages/landing-pages/StartingWidget';
import RouteSwitch from '../components/Routes/RouteSwitch';
import LandingPage from '../pages/landing-pages/landing-page-1';
import NotFound from '../pages/NotFound/404';
import Portfolio from '../pages/Portfolio/Portfolio';
import Services from '../pages/Services/Services';
import AboutUs from '../pages/about-us/About';
import ContactUs from '../pages/contact-us/Contact';
import Blogs from '../pages/Blogs/Blogs';
import Stats from '../components/Statistics/Stats';

export default function Routes() {
    return(
        <RouteSwitch>
            <Route path='/' element={<LandingPage />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='*' element={<NotFound />} />
        </RouteSwitch>
    );
};