import site_img from '../../assets/img/service/site.png'
import space_img from '../../assets/img/service/space.png'
import tv_img from '../../assets/img/service/tv.png'

import './Product.scss'

const data = {
    site: {
        img: site_img
    }
}
const ProductBlock = () => {

    return (
        <div className="ProductBlock">
            <div className='Product-title'>
                <h2>At your fingertips</h2>
                <h1>Features</h1>
                <p>Most calendars are designed for teams. 
                Slate is designed for freelancers</p>
            </div>

            <div className='Product-items'>
                <div className='Product-item'>
                    <div className='product-wrapper'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.250977" width="43" height="43.4981" rx="21.5" fill="#EF2779"/>
                        <path d="M18.5 13.5C19.9587 13.5 21.3576 14.0473 22.3891 15.0214C23.4205 15.9956 24 17.3168 24 18.6944C24 19.9506 23.53 21.1028 22.74 22H31V30.5H22V22.6989C21.05 23.445 19.83 23.8889 18.5 23.8889C17.0413 23.8889 15.6424 23.3416 14.6109 22.3675C13.5795 21.3933 13 20.0721 13 18.6944C13 17.3168 13.5795 15.9956 14.6109 15.0214C15.6424 14.0473 17.0413 13.5 18.5 13.5Z" fill="white"/>
                        </svg>
                        <h2>The best products 
                        start with Sketch</h2>
                    </div>
                    <p>Slate helps you see how many 
                        more days you need to work to 
                        reach
                         your financial goal. </p>
                </div>
                <div className='Product-item'>
                    <div className='product-wrapper'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.750977" width="43" height="42.4981" rx="21.249" fill="#EF2779"/>
                        <path d="M20.524 29.8684C22.0227 29.2461 21.6943 27.5301 20.9366 26.4453C20.1873 25.3339 19.1517 24.5693 18.1077 23.8313C17.3628 23.3355 16.6977 22.7172 16.1376 21.9997C15.9018 21.7063 15.4219 21.1639 15.9102 21.0573C16.407 20.9506 17.2657 21.4663 17.7035 21.6619C18.4697 21.9997 19.2274 22.3909 19.9347 22.8533L20.785 21.3418C19.4716 20.426 17.7877 19.6169 16.2217 19.3768C15.3293 19.2346 14.3863 19.4302 14.0832 20.4527C13.8138 21.3329 14.2432 22.222 14.7315 22.9155C15.885 24.5426 17.6783 25.325 19.017 26.7298C19.3032 27.0233 19.6484 27.37 19.8168 27.779C19.9936 28.1702 19.9515 28.1969 19.5558 28.1969C18.5118 28.1969 17.2068 27.3344 16.3565 26.7654L15.5061 28.2769C16.7943 29.1127 18.9496 30.4197 20.524 29.8684ZM29.8611 15.9982C30.0463 15.8026 30.0463 15.4825 29.8611 15.2958L28.7666 14.1399C28.6784 14.0501 28.5607 14 28.4382 14C28.3157 14 28.198 14.0501 28.1099 14.1399L27.2511 15.0468L29.0023 16.8962L29.8611 15.9982ZM21.5764 21.0395V22.8888H23.3277L28.5056 17.4208L26.7543 15.5714L21.5764 21.0395Z" fill="white"/>
                        </svg>
                        <h2>Fastest way to 
                        organize</h2>
                    </div>
                    <p>Slate helps you see how many 
                        more days you need to work to 
                        reach
                         your financial goal. </p>
                </div>
                <div className='Product-item'>
                    <div className='product-wrapper'>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="#EF2779"/>
                        <path d="M18.0946 23.2387L20.7258 20.6075L14.9706 14.8616C14.5243 14.4153 13.7526 14.5362 13.4737 15.1127C12.8136 16.498 13.0553 18.1994 14.1989 19.3523L18.0946 23.2387ZM24.3984 21.5559C25.8209 22.216 27.8199 21.7511 29.2982 20.2728C31.074 18.497 31.418 15.9494 30.0513 14.5827C28.6938 13.2253 26.1463 13.56 24.3612 15.3358C22.8829 16.8141 22.418 18.8131 23.0781 20.2356L14.6545 28.6592C14.4807 28.833 14.383 29.0688 14.383 29.3147C14.383 29.5605 14.4807 29.7963 14.6545 29.9702C14.8284 30.144 15.0641 30.2417 15.31 30.2417C15.5558 30.2417 15.7916 30.144 15.9655 29.9702L21.7207 24.2336L27.4666 29.9795C27.5526 30.0655 27.6548 30.1338 27.7673 30.1804C27.8798 30.227 28.0003 30.251 28.122 30.251C28.2438 30.251 28.3643 30.227 28.4768 30.1804C28.5892 30.1338 28.6914 30.0655 28.7775 29.9795C28.8636 29.8934 28.9319 29.7912 28.9785 29.6787C29.025 29.5663 29.049 29.4457 29.049 29.324C29.049 29.2022 29.025 29.0817 28.9785 28.9692C28.9319 28.8568 28.8636 28.7546 28.7775 28.6685L23.0316 22.9226L24.3984 21.5559Z" fill="white"/>
                        </svg>
                        <h2>Work better 
                        together</h2>
                    </div>
                    <p>Slate helps you see how many 
                        more days you need to work to 
                        reach
                         your financial goal. </p>
                </div>
            </div>
 
        </div>
    )
}
export default ProductBlock;