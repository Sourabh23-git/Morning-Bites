import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { bitesContext } from "../context/MyContext";
import "./MyCart.css";

function MyCart() {
  const { cartItem, setCartItem } = useContext(bitesContext);
  const navigate = useNavigate();
  function GoToHome() {
    navigate("/");
  }
  return (
    <div className="maincontainer1">
      {cartItem?.length === 0 ? (
        <div className="empty-cart-message">
          <h2>
            Your Cart is <br /> Empty
          </h2>{" "}
          <br></br>
          <br></br>
          <br></br>
          <button id="Gotohome" onClick={() => GoToHome()}>
            Go to Home
          </button>
        </div>
      ) : (
        <div className="card-container">
          {cartItem?.map((item, index) => (
            <Card
              key={index}
              data={item}
              setCartItem={setCartItem}
              cartItem={cartItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCart;
