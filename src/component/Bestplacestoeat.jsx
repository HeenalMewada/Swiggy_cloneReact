import React from 'react'
import BestrestinCity from "../utils/Bestrestincity"
import "./Bestplacestoeat.css"
import CuisinesNearMe from "../utils/CuisinesNearMe"



const online_delivery_places = () => {
  return (
    <>
    <h2 className='bestplacesheading'>Best Places to Eat Across Cities</h2>
    <div className='bestplaces'>
       
<div className="rest_cities">

    
    
        {

BestrestinCity.map((rest)=>{
    
    return(
       <div className="placestoeat">
<a href={rest.link}>
    <p className='cityname'>{rest.text}</p>
    {/* <p>{rest.link}</p> */}
   
</a>
 </div>
    )
})
        }
    


    </div>
    </div>
     <h2 className='cuisinesheading'>Best Cuisines Near Me</h2>
    <div className="cuisinesnearme">{

       CuisinesNearMe.map((cuisines)=>{
       
        return(
         
<>
          <div className="bestplacescuisines">
            <a href={cuisines.link}>
              <p className='cityname'>{cuisines.text}</p>
            </a>
          </div>
          </>
        )
       })
      
      }
   
  </div>
  <h2 className='exploreeveryrestaurantheading'>Explore Every Restaurants Near Me</h2>
  <div className="exploreeveryrestaurant">
    
    <a href="https://www.swiggy.com/restaurants-near-me" className='explorerestaurant'>Explore Every Restaurants Near me</a>
    <a href="https://www.swiggy.com/best-restaurants-near-me" className='explorerestaurant'>Explore Top Rated Restaurants Near Me</a>
  </div>
    </>
  )
  
}

export default online_delivery_places