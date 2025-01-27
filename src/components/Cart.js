import ItemsList from "./ItemsList";
import { useSelector, useDispatch } from "react-redux";
import {clearCart} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <button className="bg-black text-white m-2 p-2 rounded-xl" onClick={handleClearCart}>
        Clear cart
      </button>
      <div className="w-1/2 m-auto">
        {cartItems.map((item) => (
          <ItemsList item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
