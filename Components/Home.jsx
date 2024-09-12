import React, { useEffect, useState, useContext } from "react";
//import productData from "../Data.js";
import Card from "./Card.jsx";
import { ThemeStore } from "./ThemeContext.jsx";
import { Link } from "react-router-dom";
//import AddedCartCard from "./AddedCartCard.jsx";
import ShimmerUI from "./shimmerUI.jsx";

const Home = () => {
  const [allproducts, setallproducts] = useState([]);
  const [products, setproducts] = useState([]);
  const [query, setquery] = useState("");

  const { theme, setTheme } = useContext(ThemeStore);

  const handleTopRated = () => {
    const filteredData = allproducts.filter((obj) => obj.rating > 4);
    setproducts(filteredData);
  };

  const handleCategory = (category) => {
    const filteredData = allproducts.filter((obj) => obj.category === category);
    setproducts(filteredData);
    setquery("");
  };

  const handleSearch = () => {
    const filteredData = allproducts.filter((obj) =>
      obj.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setproducts(filteredData);
  };

  const getdata = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const productData = await response.json();
      setallproducts(productData.products);
      setproducts(productData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []); // Empty dependency array ensures the effect runs only once

  if (allproducts.length == 0) {
    // Return shimmer or loading UI when data is being fetched
    return (
      <div>
        <ShimmerUI></ShimmerUI>
      </div>
    ); // Replace with your actual shimmer UI
  }

  return (
    <div className={theme == "light" ? "bg-white" : "bg-black"}>
      <div className="flex justify-around items-center w-full h-20">
        <button onClick={handleTopRated} className="btn btn-active btn-primary">
          Top Rated
        </button>
        <button
          className="btn btn-active btn-primary"
          onClick={() => handleCategory("furniture")}
        >
          Furniture
        </button>
        <div className="search flex justify-around items-center w-1/5">
          <input
            value={query}
            onChange={(e) => setquery(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-warning" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button
          className="btn btn-active btn-primary"
          onClick={() => handleCategory("groceries")}
        >
          Grocery
        </button>
        <button
          className="btn btn-active btn-primary"
          onClick={() => handleCategory("beauty")}
        >
          Beauty
        </button>
      </div>
      <div className="flex justify-around flex-wrap ">
        {products.map((obj) => {
          return (
            <Link key={obj.id} to={`/Product/${obj.id}`}>
              {" "}
              <Card productObj={obj}></Card>{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
