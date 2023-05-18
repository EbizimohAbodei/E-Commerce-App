import React, { useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";

import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducers/cartReducers";
const Product = () => {
  const {products} = useAppSelector((state) => state.productsReducer);
  

  const dispatch = useAppDispatch();



  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <div className="product-card">
            <Link  to={`/product/${product.id}`}>

            <div className="product-tumb">
              <img src={product.images[0]} alt="" />
            </div>
            <div className="product-details">
              <span className="product-catagory">{product.category.name}</span>
              <h4>
                <a href="">{product.title}</a>
              </h4>
              <p>{product.description}</p>
              <div className="product-bottom-details">
                <div className="product-price">
                  ${new Intl.NumberFormat("en-US").format(product.price)}
                </div>
              </div>
            </div>
            </Link>
            <div className="product-links">
              <button onClick={() => dispatch(addToCart(product))}>
                <HiShoppingCart />
              </button>
              <button>
                <FaHeart />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
