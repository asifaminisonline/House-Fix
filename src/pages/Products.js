import React, { useState } from "react";
import Footer from "../components/Footer";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Bluespace from "../components/Bluespace";
import { products } from "../Data";
import { Link } from "react-router-dom";
import SubFooter from "../components/SubFooter";
import "./Products.css";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Products({ selectedColor }) {
  const dispatch = useDispatch();
  const [categoryFilters, setCategoryFilters] = useState([""]);
  const [priceFilter, setPriceFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const filterProducts = () => {
    return products.filter((product) => {
      const categoryMatch =
        categoryFilters.length === 0 ||
        categoryFilters.includes("") ||
        categoryFilters.includes(product.tag);
      const priceMatch =
        !priceFilter ||
        priceFilter === "All" ||
        (parseInt(product.price) >= parseInt(priceFilter.split("-")[0]) &&
          parseInt(product.price) <= parseInt(priceFilter.split("-")[1]));
      const colorMatch =
        !colorFilter || colorFilter === "All" || product.color === colorFilter;
      const ratingMatch =
        !ratingFilter ||
        ratingFilter === "All" ||
        product.rating.toString() === ratingFilter;

      return categoryMatch && priceMatch && colorMatch && ratingMatch;
    });
  };

  const clearFilters = () => {
    setCategoryFilters([""]);
    setPriceFilter("");
    setColorFilter("");
    setRatingFilter("");
  };

  const isSelected = (filterValue, selectedValue) => {
    return filterValue === selectedValue ? "selected" : "";
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <SecondaryNavbar />

      <div className="product-page-container">
        <div className="filter-section">
          <h2 className="filter-heading">Filters</h2>
          <div className="filter-options">
            <div className="filter-category">
              <h3>Category</h3>

              <li
                className={isSelected("", categoryFilters[0])}
                onClick={() => setCategoryFilters([""])}
              >
                All
              </li>
              <li
                className={isSelected("Featured", categoryFilters[0])}
                onClick={() => setCategoryFilters(["Featured"])}
              >
                Featured
              </li>
              <li
                className={isSelected("Recommended", categoryFilters[0])}
                onClick={() => setCategoryFilters(["Recommended"])}
              >
                Recommended
              </li>
              <li
                className={isSelected("Latest", categoryFilters[0])}
                onClick={() => setCategoryFilters(["Latest"])}
              >
                Latest
              </li>
              <li
                className={isSelected("Offered", categoryFilters[0])}
                onClick={() => setCategoryFilters(["Offered"])}
              >
                Offered
              </li>
            </div>
            <div className="filter-price">
              <h3>Price</h3>

              <li
                className={isSelected("All", priceFilter)}
                onClick={() => setPriceFilter("All")}
              >
                All
              </li>
              <li
                className={isSelected("500-1000", priceFilter)}
                onClick={() => setPriceFilter("500-1000")}
              >
                500-1000
              </li>
              <li
                className={isSelected("1000-1500", priceFilter)}
                onClick={() => setPriceFilter("1000-1500")}
              >
                1000-1500
              </li>
              <li
                className={isSelected("1500-2000", priceFilter)}
                onClick={() => setPriceFilter("1500-2000")}
              >
                1500-2000
              </li>
              <li
                className={isSelected("2000-3000", priceFilter)}
                onClick={() => setPriceFilter("2000-3000")}
              >
                2000-3000
              </li>
            </div>
            <div className="filter-color">
              <h3>Color</h3>

              <li
                className={isSelected("All", colorFilter)}
                onClick={() => setColorFilter("All")}
              >
                All
              </li>
              <li
                className={isSelected("Red", colorFilter)}
                onClick={() => setColorFilter("Red")}
              >
                Red
              </li>
              <li
                className={isSelected("Black", colorFilter)}
                onClick={() => setColorFilter("Black")}
              >
                Black
              </li>
              <li
                className={isSelected("White", colorFilter)}
                onClick={() => setColorFilter("White")}
              >
                White
              </li>
              <li
                className={isSelected("Gray", colorFilter)}
                onClick={() => setColorFilter("Gray")}
              >
                Gray
              </li>
            </div>
            <div className="filter-rating">
              <h3>Rating</h3>

              <li
                className={isSelected("All", ratingFilter)}
                onClick={() => setRatingFilter("All")}
              >
                All
              </li>
              <li
                className={isSelected("5", ratingFilter)}
                onClick={() => setRatingFilter("5")}
              >
                5 Star
              </li>
              <li
                className={isSelected("4", ratingFilter)}
                onClick={() => setRatingFilter("4")}
              >
                4 Star
              </li>
              <li
                className={isSelected("3", ratingFilter)}
                onClick={() => setRatingFilter("3")}
              >
                3 Star
              </li>
              <li
                className={isSelected("2", ratingFilter)}
                onClick={() => setRatingFilter("2")}
              >
                2 Star
              </li>
              <li
                className={isSelected("1", ratingFilter)}
                onClick={() => setRatingFilter("1")}
              >
                1 Star
              </li>
            </div>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
        <div className="products-section">
          {filterProducts().map((product, index) => (
            <div className="product-page-card" key={index}>
              <img
                className="product-page-image"
                src={product.imageURL}
                alt={product.title}
              />
              <div className="product-page-details">
                <h2 className="product-page-title">{product.title}</h2>
                <p className="product-page-description">
                  {product.description}
                </p>
                <div className="product-page-buttons">
                  <Link
                    className="product-page-button"
                    to={`/products/${product.id}`}
                  >
                    View More
                  </Link>
                  <button
                    className="product-page-button"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Bluespace style={{ backgroundColor: selectedColor }} />
      <Footer />
      <SubFooter style={{ backgroundColor: selectedColor }} />
    </>
  );
}

export default Products;
