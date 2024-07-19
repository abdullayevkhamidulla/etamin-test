import React from 'react';
import dropbox from "../../assets/img/dropbox.png";
import avatar from "../../assets/img/testimonials.png";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './TestimonialsPage.scss';

const TestimonialsPage = () => {
   

    return (
        <div className="TestimonialsPage">
           <h1>Testimonials</h1>
           <div className='testimonial-text'>
                <img src={dropbox} className='testimonials-img' alt='testimonial'/>
                <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple 
                way to plan their schedule.</p>
                <div className='testimonial-bottom'>
                    <img src={avatar} alt='testimonial'/>
                    <div className='test-child'>
                        <p>Organize across</p>
                        <h3>Ui designer</h3>
                    </div>
                </div>
           </div>
           <button>More Testimonials</button>
        </div>
    );
};

export default TestimonialsPage;
