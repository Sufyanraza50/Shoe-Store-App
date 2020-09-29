import React from "react";
import NavBar from "./Navbar";
import Shoes from "../shoes.json";
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  console.log(Shoes);
  console.log(Object.keys(Shoes));

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Shoes Products</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((keyName) => {
            const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={150} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
