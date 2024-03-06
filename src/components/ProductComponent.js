import { Link } from "react-router-dom/dist";
import { products } from "../Data";
import "./ProductComponent.css";

function ProductsComponent({ selectedColor }) {
  const tagColors = [
    "#007bff",
    "#28a745",
    "#dc3545",
    "#ffc107",
    "#17a2b8",
    "#6610f2",
    "#20c997",
    "#6c757d",
    "#fd7e14",
    "#007bff",
  ];

  return (
    <>
      <div className="top-section">
        <h1>
          <span style={{ backgroundColor: selectedColor }}>Products</span>
        </h1>
        <p style={{ textAlign: "center", width: "900px", margin: "auto" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="Grand-parent">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.imageURL}
                alt={product.title}
              />
              <span
                className="product-tag"
                style={{ backgroundColor: tagColors[index % tagColors.length] }}
              >
                {product.tag}
              </span>
            </div>
            <div className="product-details">
              <h2 className="product-title" style={{ color: selectedColor }}>
                {product.title}
              </h2>
              <p className="product-description">{product.description}</p>
              <div className="product-buttons">
                <button className="product-button">{product.buttonLink}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-products">
        <Link to="/products">
          <button
            className=" view-more"
            style={{ backgroundColor: selectedColor }}
          >
            More Products
          </button>
        </Link>
      </div>
    </>
  );
}

export default ProductsComponent;
