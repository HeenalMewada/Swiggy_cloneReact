import React from 'react'
import OnlineFoodDelivery from "../utils/OnlineFoodDelivery"
import "./Onlinefooddelivery.css"

const Onlinefooddelivery = () => {
  return (
    
    <div className="restaurantWithOnlineFood">
        <h1>Restaurants with online food delivery in Delhi</h1>
        {
            OnlineFoodDelivery.map((onlineItems=>{
                return(
                    <>
                   <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${onlineItems.cloudinaryImageId}`}alt="" className='onlinedeliveryimages'/> 
               <p>{onlineItems.name}</p>
               </>
            )
            }))
        }
      </div>
  )
}

export default Onlinefooddelivery