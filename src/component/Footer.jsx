import React from 'react'
import "./Footer.css"
import { FaInstagram, FaFacebookF, FaPinterest, FaTwitter, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="appdownloadlinks">
        <div className="downloadpara">For better experience, download the Swiggy app now</div>
       <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" className='playstorebutton' /></a>
       <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" className='playstorebutton' /></a>
      </div>
      <div className="footerWidget">
        <div className="swiggy_logo">
          <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="" style={{ height: "48px", width: "160px" }} />
          <p>© 2025 Swiggy Limited</p>
        </div>
        <div className="company">
          <ul>
            <h1>Company</h1>
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li> Careers</li>
            <li> Team</li>
            <li> Swiggy One</li>
            <li> Swiggy Instamart</li>
            <li> Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li> Minis</li>
            <li> Pyng</li>
          </ul>
        </div>
        <div className="contactus">
          <div className="contact">
            <ul>
              <h1>Contact Us</h1>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="legalterms" style={{paddingTop:"70px"}}>
            <ul>
              <h1>Legal</h1>
              <li> Terms & Conditions</li>
                <li>  Cookie Policy</li>
                 <li> Privacy Policy</li>
                <li>  Investor Relations</li>
            </ul>
          </div>
        </div>
        <div className="availablein">
          <ul>
            <h1>Available in</h1>
            <li> <a href="https://www.swiggy.com/city/bangalore">Bangalore</a></li>
            <li><a href="https://www.swiggy.com/city/gurgaon"> Gurgaon</a></li>
            <li><a href="https://www.swiggy.com/city/hyderabad"> Hyderabad</a></li>
            <li> <a href="https://www.swiggy.com/city/delhi">Delhi</a></li>
            <li> <a href="https://www.swiggy.com/city/mumbai">Mumbai</a></li>
            <li><a href="https://www.swiggy.com/city/pune"> Pune</a></li>
          </ul>
        </div>
        <div className="lifeatswiggy">
          <ul>
            <h1>Life at Swiggy</h1>
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
          <div className="sociallinks" style={{paddingTop:"100px"}}>
          <h1>Social Links</h1>
          <a href="https://www.instagram.com/swiggyindia/?hl=en"  target="_blank"><FaInstagram /></a>
          <a href="https://www.facebook.com/swiggy.in/"  target="_blank"><FaFacebookF /></a>
          <a href="https://in.pinterest.com/swiggyindia/"  target="_blank"><FaPinterest /></a>
          <a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"  target="_blank"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/swiggy-in/"  target="_blank"><FaLinkedin /></a>
        </div>
        </div>
       
      </div>
 
    </div>

  )
}

export default Footer