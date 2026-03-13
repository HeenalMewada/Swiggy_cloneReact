import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./SearchFood.css";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData?.filter((items) => "title" in items?.card?.card);
      setRestData(filterData);
    }

    fetchData();
  }, [id]);

  // whenever 'food' changes, filter dishes
  useEffect(() => {
    if (!food) {
      setFilteredDishes([]);
      return;
    }

    // Flatten all dishes from all categories
    const allDishes = RestData.flatMap((category) =>
      category?.card?.card?.itemCards?.map((item) => item.card.info)
    ).filter(Boolean);

    // Filter by name
    const matched = allDishes.filter((dish) =>
      dish.name.toLowerCase().includes(food.toLowerCase())
    );

    setFilteredDishes(matched);
  }, [food, RestData]);

  return (
    <div className="inputContainer">
      <input
        className="inputforsearch"
        placeholder="Search dish here...."
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <div className="searchResults">
        {food && filteredDishes.length === 0 && <p>No results found 😞</p>}

        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dishCard">
            <p className="dishName">{dish.name}</p>
            <p className="dishPrice">₹{dish.price / 100}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
