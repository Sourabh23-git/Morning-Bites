import { useContext } from "react";
import "./Card.css";
import { bitesContext } from "../context/MyContext";

function Card({ data }) {
  const { Item, decrement, increment, trackbtn, settrackbtn, cartItem } =
    useContext(bitesContext);

  const Already = cartItem?.some((item) => {
    return item?.id === data?.id;
  });

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={data?.image} alt="product" />
        </div>

        <div className="card-details">
          <div className="row">
            <h3 className="product-name">Name: {data?.productName}</h3>
            <p className="product-price">Price: ₹{data?.productPrice}</p>
          </div>

          <div className="row">
            <p className="product-rating">Ratings: ⭐ {data?.rating}</p>
            <p className="product-madeby">Made By: {data?.madeBy}</p>
          </div>

          <div className="row">
            <p className="product-qty">Quantity: {data?.quantity}</p>
   
          </div>

          <div className="row-description-row">
            {trackbtn === true ? (
              <div>
                <p>
                  Description: <br />
                  {data.description.substr(0, 50)}
                  <div>
                    <button
                      onClick={() => {
                        settrackbtn(!trackbtn);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </p>
              </div>
            ) : (
              <p>
                Description: <br />
                {data.description}
                <div>
                  <button
                    onClick={() => {
                      settrackbtn(!trackbtn);
                    }}
                  >
                    Read Less
                  </button>
                </div>
              </p>
            )}
          </div>
          {Already === true ? (
            <button className="Cartbtn" onClick={() => {}}>
              <div className="counter">
                <p
                  onClick={() => {
                    decrement(data);
                  }}
                >
                  -
                </p>
                <p>{data?.quantity}</p>
                <p
                  onClick={() => {
                    increment(data);
                  }}
                >
                  +
                </p>
              </div>
            </button>
          ) : (
            <button
              className="Cartbtn"
              onClick={() => {
                Item(data);
              }}
            >
              {" "}
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
