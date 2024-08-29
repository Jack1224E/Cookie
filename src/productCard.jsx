import React from "react";
import "./styles/styles.css";

const ProductCard = ({ image, name, category, price }) => {
  return (
    <div className="product-card mt-12">
      <picture className="flex justify-center w-full py-3 rounded-md">
        {/* Define responsive image sources */}
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <source media="(min-width: 340px)" srcSet={image.mobile} />
        {/* Fallback image for browsers that do not support <picture> or if no source matches */}
        <img src="{image.mobile}" alt={name} /> 
      </picture>
      <div className="product-details mt-5 relative left-3">
        <p className="font-semibold text-base mt-1">{category}</p>
        <h1 className="text-lg font-bold mt-1">{name}</h1>
        <h2 className="text-red-500 font-semibold mt-1 mb-1">${price.toFixed(2)}</h2> {/* Ensure price is formatted to 2 decimal places */}
      </div>
    </div>
  );
};

export default ProductCard;
