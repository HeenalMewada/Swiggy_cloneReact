import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import { Link } from "react-router";
import "./RestaurantMenu.css"


export default function RestaurantMenu() {

  let { id } = useParams();
  const [selected, setSelected] = useState(null);
  console.log(id);

  const [RestData, setRestData] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const proxyServer = "https://cors-anywhere.herokuapp.com/"
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter((items) => 'title' in items?.card?.card)
      setRestData(filterData);
    }

    fetchData();
  }, [])

  console.log(RestData);

  return (
    <div>

      <div className="SearchButton">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="searchfordishes">Search for dishes</p> 
        </Link>
      </div>

      <div className="restmenuContainer">

        <button className="btnForveg"
          style={{
            backgroundColor: selected === "veg" ? "rgb(99, 218, 99)" : "rgb(168, 166, 166)",
          }}
          onClick={() => setSelected(selected === 'veg' ? null : 'veg')}
        >
          Veg
        </button>

        <button className="btnFornonveg"
          style={{
            backgroundColor: selected === "nonveg" ? "rgb(197, 82, 82)" : "rgba(194, 191, 191, 1)",
          }}
          onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}
        >
          Nonveg
        </button>

      </div>

      <div className="restMenu">
        {
          RestData.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
        }
        <div style={{ height: "7px", backgroundColor: "gray", marginTop: "2px", marginBottom: "2px" }}></div>
      </div>

    </div>
  )

}