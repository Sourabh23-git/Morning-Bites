import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { bitesContext } from "../context/MyContext";
import "./Navbar.css"

function Navbar() {
  const { cartItem } = useContext(bitesContext);
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li id="mainlogo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sc3f39v_A_jU4x0jsQKnYbwhG9NrOzOD-LafW_tA0711sU_7w7kcU5Y3o-QYRxW1Wsw&usqp=CAU"
            alt="xyz"
          />
        </li>
        <li>
          <NavLink to="/" ClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" ClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" ClassName="active-link">
            Contact
          </NavLink>
        </li>
        <input type="search" placeholder="Search item here" />

        <li id="mycartlogo">
          <NavLink to="/MyCart" className="active-link">
            <div className="cart-container">
              <img
                src="https://i.pinimg.com/736x/7f/24/92/7f249252404646c08d90976505cb6937.jpg"
                alt="cart"
              />
              {cartItem?.length > 0 && <p>{cartItem?.length}</p>}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
