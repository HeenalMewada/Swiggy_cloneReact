import React from 'react'
import { Link } from "react-router-dom"
import "./RestaurantCard.css"
import OIP from "../component/images/OIP.jpg"
import { BiBorderRadius } from 'react-icons/bi'


function RestaurantCard({ restInfo }) {
  return (

    <div className='restaurant_cards'>


      <div className='restaurantmenu_images'>


        <div className="restMenu_items">
          <Link to={"/city/delhi/" + restInfo?.info?.id}>

            <img className="restMenu_image" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo.info.cloudinaryImageId}`} alt="" />

            <p className='RestaurantName'>{restInfo.info.name}</p>
            <div className="restDelhiData">
              <img src={OIP} alt="" style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%"
              }} />
              <p className='avgrating'>{restInfo.info.avgRating}</p><span>*</span>
              <p className='distTime'>{restInfo.info.sla.slaString}</p>

            </div>


            <p className='delhirestcuisines' >{restInfo.info.cuisines}</p>
            <p className='delhi_places'>{restInfo.info.locality}</p>
          </Link>
        </div>


      </div>
    </div>



  )

}


export default RestaurantCard;




