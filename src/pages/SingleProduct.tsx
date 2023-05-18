import React, { useEffect } from "react";
import { FaAngleLeft, FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  fetchAllProducts,
    
} from "../redux/reducers/productReducers";

import { addToCart } from "../redux/reducers/cartReducers";
import { useParams } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";
import Slider from "../components/Slider";
import { Product } from "../types/Products";
import { fetchSingleProduct } from "../redux/reducers/productReducers";
const SingleProduct = () => {
  const {product} = useAppSelector((state) => state.productsReducer);
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id as string));
  }, []);


      
  return (
    <>
      {product && (
        <div>
          <section className="single-product-details">
            <div className="images">
              <Slider images={product?.images as Array<string>} />
            </div>

            <div>
              <div className="details">
              <h1>{product.title}</h1>
                <article>
                  <p>price:</p>
                  <span>{product.price}</span>
                </article>
                <article>
                  <p>description:</p>
                  <span>{product.description}</span>
                </article>

                <button onClick={()=> dispatch(addToCart(product))}>Add To Cart <FaCartPlus/></button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
