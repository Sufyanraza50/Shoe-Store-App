import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";

function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  if (!shoe) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <Navbar />
      <h1>Welcome To Product Item</h1>
      <br />
      <div className="link">
        <h2 style={{ marginLeft: 50 }}>{shoe.name}</h2>
        <img src={shoe.img} height={500} style={{ marginLeft: 50}} />
      </div>
    </div>
  );
}

export default ProductItem;
