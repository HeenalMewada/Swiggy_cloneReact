import { useState } from "react"
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { Provider, useDispatch, useSelector } from "react-redux";
import "./RestInfo.css"

export default function RestInfo({restData}){
  
  

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cartslice.items);

  const element = items.find(item=>item.id===restData.id);
  const count = element? element.quantity:0;

  function handleAdditems(){
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }


    return (
         <>
        <div className="restInfoContainer">
          <div className="restInfoRestdata">
            <p className="restInfoRestname">{restData?.name}</p>
<p>{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className="restInfoRating">{restData?.ratings?.aggregatedRating?.rating}</span>
            
            <span className="restInfoAvailable">{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>
                {restData?.description}
            </p>    
          </div>
          <div className="restInfoImg">
            <img className="restInfoImagMenuCard" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
          {
            (count==0)?(<button className="restInfoBtn" onClick={()=>handleAdditems()}>ADD</button>):(
              <div className="cartDataContainer">
                <button onClick={()=>handleDecrementItems()} className="countBtn"> - </button>
                <span> {count} </span>
                <button onClick={()=> handleIncrementItems()} className="countBtn"> + </button>
              </div>
            )
          }  
          </div>
        </div>
        <hr style={{marginBottom:"6px",marginTop:"2px"}}></hr> 
        </>

    )
}