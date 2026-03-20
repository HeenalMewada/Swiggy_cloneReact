import React from 'react'
import "./FoodOption.css"
import ShopOnGroceries from "../utils/ShopOnGroceries"
import { useState } from 'react'

import foodOptiondata from '../utils/foodOPtionsdata'
const FoodOption = () => {

    return (
        <>
            <div className='food_options'>
                <h1>Order our best food options</h1>
             
                <div>
                    {
                        foodOptiondata.map((food) => {
                            console.log(food);

                            return (
                                <>
                                    <a href={food.action.link}>
                                        <img className='food_image' src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`} alt="" srcset="" />
                                   
                                    </a>
                                </>
                            )
                        })
                    }
                </div>
            </div>

<h1 class="shopHeading">Shop groceries on instamart</h1>
            <div className='ShopOnGroceries'>

                
                
                    {
                        ShopOnGroceries.map((food) => {
                            // console.log(food);

                            return (
                                <>
                                    <a href={food.action.link}>
                                        <img className='food_image' src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`} alt="" srcset="" />
                                    <p>{food.action.text}</p>
                                    </a>
                                </>
                            )
                        })
                    }
                
            </div>
        </>

    )
}

export default FoodOption