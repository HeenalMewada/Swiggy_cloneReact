import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Whats_on_your_Mind from "./Whats_on_your_Mind"



export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);
   
    // Shimmer Effect 


    return (
        <>
        <Whats_on_your_Mind></Whats_on_your_Mind>
        <div>
            <div className="restaurant_cards">
      <h2>Top restaurant chains in Delhi</h2>

      <div className="restaurantmenu_images">
            {
                RestData?.map((restInfo)=><RestaurantCard key={restInfo?.info?.id} restInfo={restInfo}></RestaurantCard>)
         
                  
           }
          
           
</div>
    </div>
        </div>
        </>
    )

}