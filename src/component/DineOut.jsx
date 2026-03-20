import React from 'react'
import dineOut from "../utils/dineOut"
import "./Dineout.css"
import OIP from "../component/images/OIP.jpg"
const DineOut = () => {
  return (
    <div className='DineOut'>

      <h1>Discover best restaurants on Dineout</h1>
      <div className='restaurant_container'>
        {
          dineOut.map((food) => {
            // console.log("hii");

            // console.log(food);

            return (
              <>
           
                <a target="_blank" href={food.cta.link}>
                  <div className="rest_items">

                    <div className="image_container">
                      <img className='restaurant_image' src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.info.mediaFiles[0].url}`} alt={food.info.name} />
                      <div className='rest_data'>
                        <p className='restName'>{food.info.name}</p>
                        <div className="rating_container">

                          <img src={OIP} alt="" className='rating_image' />
                          <p className='rest_rating'>{food.info.rating.value}</p>
                        </div>

                      </div>
                      <div className="rest_info">
                        <div className="restCuisines">
                          <p className="cuisines">{food.info.cuisines}</p>
                          <p className="dish_rate">{food.info.costForTwo}</p> </div>
                        <div className="restDist">
                          <p className='location_info'>{food.info.locationInfo.formattedAddress}</p>
                          <p className="rest_distance">{food.info.locationInfo.distanceString}</p>
                        </div>
                        <div className="table_booking">
                          <img class="tablebookingimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png" width="12px" height="12px" alt="Table booking"></img>
                          Table booking
                        </div>
                        <div className="offer">
                          <p className='offertag'>{food.info.customerOffer.info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </a>

              </>

            )
          })
        }
      </div>
    </div>
  )
}

export default DineOut


//  https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/