import React from 'react'
import Header from './component/Header'
import FoodOption from './component/FoodOption'
import DineOut from './component/DineOut'
import Restaurant from "./component/Restautant"
import Bestplacestoeat from "./component/Bestplacestoeat"
import Footer from './component/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Onlinefooddelivery from './component/Onlinefooddelivery'
import RestaurantMenu from './component/RestaurantMenu'
import SearchFood from "./component/SearchFood"
import Checkout from "./component/Checkout"
import SecondaryHome from "./component/SecondaryHome"

const App = () => {
  return (
   <BrowserRouter>
     

      <Routes>
        {/* Keep your other components here if needed */}
        {/* For example, main page content */}
        <Route path="/" element={
          <> <Header />
            <FoodOption />
            <DineOut />
            {/* <Onlinefooddelivery/> */}
            <Bestplacestoeat />
            
             <Footer />
          </>
        } />

        {/* Your RestaurantMenu page */}
       
       
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        
       <Route element={<SecondaryHome></SecondaryHome>}> 
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>     
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
   

     
    </BrowserRouter>
  )
}

export default App