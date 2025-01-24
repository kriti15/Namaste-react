import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [categoryIndex, setCategoryIndex] = useState(null);
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info;

  const categories =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="my-4 font-bold text-xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          category={category}
          key={category.card.card.title}
          showItems={index === categoryIndex && true}
          setCategoryIndex={() => setCategoryIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
