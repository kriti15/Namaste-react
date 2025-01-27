import { IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemsList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="flex justify-between border-b-2 border-gray-300 p-2 m-2">
      <div className="text-left w-3/4 my-4">
        <span>{item?.card?.info?.name}</span>
        <span>
          {" "}
          ₹ -{" "}
          {item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100}
        </span>
        <p className="text-xs">{item?.card?.info?.description}</p>
      </div>
      <div className="relative w-1/4">
        <img src={IMAGE_URL + item?.card?.info?.imageId} />
        <button
          className="absolute top-0 left-0 w-12 bg-black text-white rounded m-2 p-2"
          onClick={() => handleAddItems(item)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default ItemsList;
