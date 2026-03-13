import { useState } from "react"
import RestInfo from "./RestInfo"
import "./MenuCard.css"


export default function MenuCard({menuItems,foodselected}){

    const [isOpen, setIsOpen] = useState(true);
    
    
    if("categories" in menuItems){
        return(
            <div className="Menucard_conatainer">
            <p className="MenuCardTitle">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
                }
            </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
        <div className="openContainer">
            <div className="titlebutton">
            <p className="menuTitle">{menuItems.title}</p>
            <button className="menuBtn" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            
        </div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <div className="vegContainer">
            <div className="vegbtncontainer">
            <p className="menuTitle">{menuItems.title}</p>
            <button className="menuBtn" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            {/* <div className="h-5 bg-gray-200 mt-2 mb-2"></div> */}
        </div>
        )
    }

     
    if(foodselected==='nonveg'){
        return(
            <div className="vegContainer">
            <div className="vegbtncontainer">
            <p className="menuTitle">{menuItems.title}</p>
            <button className="menuBtn" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            {/* <div className="h-5 bg-gray-200 mt-2 mb-2"></div> */}
        </div>
        )
    }

   


    return (
       
        <div className="vegContainer">
            <div className="vegbtncontainer">
            <p className="menuTitle">{menuItems.title}</p>
            <button className="menuBtn" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            {/* <div className="h-5 bg-gray-200 mt-2 mb-2"></div>  */}
            <div style={{height:"7px",backgroundColor:"gray",marginTop:"2px",marginBottom:"2px"}}></div>
        </div>
        
    )
}