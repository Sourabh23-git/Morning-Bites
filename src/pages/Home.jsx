import Card from "../components/Card";
import { useContext } from "react";
import { bitesContext } from "../context/MyContext";
import "../components/Card"

function Home() {
  const {Variable } = useContext(bitesContext);
  return (
    <div className="card-container">
      {Variable?.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))}
    </div>
  );
}

export default Home;
