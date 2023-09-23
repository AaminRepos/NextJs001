import AddToCart from "../AddToCart";
import React from "react";
import styles from "./ProductCart.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
