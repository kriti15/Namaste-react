import ItemsList from "./ItemsList";

const RestaurantCategory = ({ category, showItems, setCategoryIndex }) => {
  //   const [showItems, setShowItems] = useState(false);
  const toggleItems = () => {
    setCategoryIndex();
  };
  return (
    <div className="flex justify-center">
      <div className="p-4 m-2 w-1/2 bg-gray-100">
        <div
          className="flex justify-between cursor-pointer font-bold"
          onClick={toggleItems}
        >
          <span>
            {category.card.card.title} ({category.card.card.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems &&
          category.card.card.itemCards.map((item) => (
            <ItemsList key={item.card.info.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default RestaurantCategory;
