import airbnb from '../../assets/partner/logos_airbnb.png';
import android from '../../assets/partner/logos_android.png';
import apiary from '../../assets/partner/logos_apiary.png';
import apple from '../../assets/partner/logos_apple-app-store.png';
import basecamp from '../../assets/partner/logos_basecamp.png';

import './PartnersPage.scss'
const PartnersPage = () => {

    return(
        <div className="PartnersPage">
            <div className='Partner-title'>
                <h1>Partners</h1>
                <p>Most calendars are designed for teams. 
                Slate is designed for freelancers</p>
            </div>
            <div className='partner-groups'>
                <div className='partner-item'>
                    <h2>Client Name</h2>
                    <img src={apiary} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
                <div className='partner-item'>
                     <h2>Client Name</h2>
                    <img src={android} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
                <div className='partner-item'>
                     <h2>Client Name</h2>
                    <img src={basecamp} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
            </div>
            <div className='partner-groups'>
                <div className='partner-item'>
                     <h2>Client Name</h2>
                    <img src={basecamp} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
                <div className='partner-item'>
                     <h2>Client Name</h2>
                    <img src={airbnb} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
                <div className='partner-item'>
                     <h2>Client Name</h2>
                <img src={apple} alt='partner-image'/>
                    <p>Slate helps you see how 
                    many more days you need 
                    to work to reach your 
                    financial goal for
                    the month and year.</p>
                </div>
                
            </div>      
            <button>Try For Free</button>
        </div>)
}
export default PartnersPage;