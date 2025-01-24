import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex bg-green-100 justify-between shadow-lg">
      <div className="img-container">
        <img className="w-1/4" src={LOGO_URL} />
      </div>
      <div className="flex items-center m-auto">
        <ul className="flex">
          <li className="m-2 p-2">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-2 p-2">Cart</li>
          <li className="m-2 p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="mr-8"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="m-2 p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
