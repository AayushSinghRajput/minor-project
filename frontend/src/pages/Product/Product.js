import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import DryProduct from "../../data/DryProduct/DryProduct";
import OilyProduct from "../../data/OilyProduct/OilyProduct";
import NormalProduct from "../../data/NormalProduct/NormalProduct";
import AcneProduct from "../../data/AcneProduct/AcneProduct";

const renderProductCards = (products, navigate) => {
  return products.map((product, index) => (
    <div className="product-card" key={index}>
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Key Ingredients:</strong> {product.ingredients.join(", ")}
      </p>
      <p>
        <strong>Benefits:</strong> {product.benefits}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating}⭐
      </p>
      <p>
        <strong>Potential Allergens:</strong>{" "}
        {product.potentialAllergens.length > 0
          ? product.potentialAllergens.join(", ")
          : "None"}
      </p>
    </div>
  ));
};

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="product-page">
      <div className="product-container">
        <h2>Oily Skin Products</h2>
        <div className="product-grid">
          {renderProductCards(OilyProduct, navigate)}
        </div>
      </div>

      <div className="product-container">
        <h2>Dry Skin Products</h2>
        <div className="product-grid">
          {renderProductCards(DryProduct, navigate)}
        </div>
      </div>

      <div className="product-container">
        <h2>Normal Skin Products</h2>
        <div className="product-grid">
          {renderProductCards(NormalProduct, navigate)}
        </div>
      </div>

      <div className="product-container">
        <h2>Acne-Prone Skin Products</h2>
        <div className="product-grid">
          {renderProductCards(AcneProduct, navigate)}
        </div>
      </div>
    </div>
  );
};

export default Product;
