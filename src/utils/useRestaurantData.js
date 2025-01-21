import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./constants";

const useRestaurantData = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resData;
};

export default useRestaurantData;
