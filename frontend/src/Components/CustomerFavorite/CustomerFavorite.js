import React from "react";
import "./CustomerFavorite.css";

const data = [
  {
    id: 1,
    image:
      "https://www.epharmacy.com.np/content/images/thumbs/65e021054a13c8d6e93955ed_cerave-hydrating-facial-cleanser-237ml.jpeg",
    name: "CeraVe Hydrating Cleanser",
    category: "Dry",
    ingredients: ["Ceramides", "Hyaluronic Acid"],
    benefits: "Hydrates and cleanses without stripping skin",
    rating: 4.8,
  },
  {
    id: 2,
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2025_06/2025801/2504912-64de31fbb3ec8.jpg",
    name: "Snail Mucin Essence",
    category: "Dry",
    ingredients: ["Snail Secretion Filtrate,", "Glycerin"],
    benefits: "Hydrates and nourishes the skin",
    rating: 4.5,
  },
  {
    id: 3,
    image:
      "https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTErOHFuNjdiMEwuX1NTNDAwXy5qcGc.jpg",
    name: "Clean & Clear Foaming Facial Cleanser",
    category: "Oily",
    ingredients: ["Salicylic Acid", "Glycerin", "Water"],
    benefits: "Controls excess oil, prevents acne",
    rating: 4.5,
  },
  {
    id: 4,
    image:
      "https://www.epharmacy.com.np/content/images/thumbs/62fb5c9c093168bc044ff8be_neutrogena-oil-free-acne-wash-269ml_500.jpeg",
    name: "Neutrogena Oil-Free Acne Wash",
    category: "Acne-Prone",
    ingredients: ["Salicylic Acid", "Glycerin"],
    benefits: "Gently cleanses and treats acne",
    rating: 4.6,
  },
  {
    id: 5,
    image:
      "https://flexsolver-nsc-prod.s3.ap-southeast-1.amazonaws.com/f528c994-9ffd-45f5-8d97-26d301dd2b27-Cetaphil%20Daily%20Facial%20Moisturizer%20SPF15%20118ml%20%283_Bottle_Front%29.jpg",
    name: "Cetaphil Daily Facial Moisturizer SPF 15",
    category: "Normal",
    ingredients: ["Avobenzone", "Octinoxate"],
    benefits: "Hydrates and protects from UV rays",
    rating: 4.6,
  },
];

const CustomerFavorite = () => {
  return (
    <div className="customer-favorite-container">
      <h2>Customer's Top Five Favorite</h2>
      <div className="favorite-container">
        {data.map((item) => (
          <div className="favorite-card" key={item.id}>
            <div className="favorite-card-image">
              <img
                src={item.image}
                alt={item.name}
                className="favorite-product-image"
              />
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Ingredients:</strong> {item.ingredients}
              </p>
              <p>
                <strong>Benefits:</strong> {item.benefits}
              </p>
              <p>
                <strong>Rating:</strong> {item.rating} &#9733;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFavorite;
