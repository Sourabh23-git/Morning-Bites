import { useState, createContext,} from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import MyCart from "../pages/MyCart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Variable } from "../utils/Variable";
import PageNotFound from "../pages/PageNotFound";
import Navbar from "../components/Navbar";

export const bitesContext = createContext();

function MyContext() {
  const [trackbtn, settrackbtn] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(1);
  function Item(data) {
    const ifcard = cartItem?.some((item) => {
      return item?.id === data?.id;
    });

    setCartItem((oldcartdata) => {
      if (ifcard === true) {
        alert("Already in cart");
        return oldcartdata;
      } 
        return [...oldcartdata, data]; 
      
    });
  }
  function removeFromCard(id) {
    const filterValaArray = cartItem?.filter((item) => {
      return item?.id !== id;
    });
    setCartItem(filterValaArray);
  }
  function increment(data) {
    setCount(++data.quantity);
  }
  
  function decrement(data) {
    setCount(() => {
      if (data?.quantity === 1) {
        removeFromCard(data.id);
        return 1;
      }
      return data.quantity--;
    });
  }

  const user = {
    Variable,
    Item,
    cartItem,
    setCartItem,
    count,
    setCount,
    removeFromCard,
    trackbtn,
    settrackbtn,
    decrement,
    increment,
    
  };
  return (
    <div>
      <bitesContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </bitesContext.Provider>
    </div>
  );
}

export default MyContext;
