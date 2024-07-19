import React, { useState, useEffect } from 'react';
import mack from '../../assets/img/mack.png';


import './AboutPage.scss';

const AboutPage = () => {

    return (
        <div className="AboutPage">
           <div className='About-text'>
                <h1>Lightning fast 
                prototyping </h1>
                <p>
                Most calendars are designed for teams. <br/>
                Slate is designed for freelancers
                </p>
           </div>
           <button>Try For Free</button>
           <img src={mack}/>
          
        </div>
    );
};

export default AboutPage;
