import React from 'react'

import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='container'>


            <div className='header_section'>

                <div className='img_container'>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
                </div>

                <div className='header_links'>
                    <a className='link' href="">Swiggy Corporate
                    </a>
                    <a className='link' href="">Partner with us</a>
                    <a className='link btn1' href=""> Get the App</a>
                    <a className='link btn2' href="">Sign in</a>
                </div>

            </div>

            <div className='middle_section'>

                <img className='image1' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className='image2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className='header_heading'>
                    <h1> Order food & groceries. Discover best restaurants. Swiggy it!</h1>

                    <div>
                        <div className='input_conatiner'>

                            <input type="text" className='input1' placeholder='Mumbai Central, Mumbai' />
                            <img className='location-icon' src="data:image/png;base64,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" alt="" style={{ height: "40px", width: "40px" }} />

                            <input type="text" className='input2' placeholder='Search for restaurant, item or more' />
                            <img className="search-icon" src="data:image/png;base64,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" alt="" style={{ height: "20px", width: "20px" }} />
                        </div>
                    </div>
                </div>


            </div>

            <div className='footer_of_header'>
              
                <Link to="/Restaurant" target='_blank'>
                    <img className='images_of_swiggy' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                </Link>
               
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img className='images_of_swiggy' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" /></a>

                <a href="https://www.swiggy.com/dineout"><img className='images_of_swiggy' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Header