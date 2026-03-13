import React from 'react'
// import foodMenu from "../utils/foodMenu"
import {Link} from "react-router-dom"
import "./RestaurantCard.css"
import MindData from "../utils/MindData"
import OIP from "../component/images/OIP.jpg"
import { BiBorderRadius } from 'react-icons/bi'


function Whats_on_your_Mind() {

  return (
    <>
     <h2 style={{ marginLeft: "150px" }}>What's on your mind?</h2>
      <div className="restMenucontainer">
            {
              MindData.map((fooditem)=>{
            return(
              <a href={fooditem.action.link}>
                <img className="curated_rest_image" src={`https://media-assets.swiggy.com/swiggy/image/upload/${fooditem.imageId}`} alt={fooditem.action.link} />
           </a>
            )  
            
         
}) 
} 
          
      </div> 
      </> )}

      export default Whats_on_your_Mind;