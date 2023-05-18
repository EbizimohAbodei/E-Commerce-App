import React from "react";
import useAppSelector from "../hooks/useAppSelector";
import { FaMinus, FaPlus } from "react-icons/fa";
import useAppDispatch from "../hooks/useAppDispatch";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/reducers/cartReducers";
const Cart = () => {
  const cart = useAppSelector((state) => state.cartReducers);
  const dispatch = useAppDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const getTotalAmount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th align="left">Title</th>
            <th align="left">Quantity</th>
            <th align="left">Amount</th>
            <th align="left">Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => {
            return (
              <tr className="title-row">
                <td>
                  <img src={item.images[0]} alt={item.title} />
                  <h2>{item.title}</h2>
                </td>
                <td>
                  <div className="counter">
                    <button onClick={() => dispatch(decrementQuantity(item))}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item))}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td>
                  ${new Intl.NumberFormat().format(item.price * item.quantity)}
                </td>
                <td>
                  <button
                    className=""
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    delete item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <section className="subtotal">
        <div>
          <h3>Total items: {getTotalAmount()} </h3>
        </div>
        <div>
          <h3>
            Sub Total: ${new Intl.NumberFormat().format(getTotalPrice())}{" "}
          </h3>
        </div>
        <div>
          <h3>Total: ${new Intl.NumberFormat().format(getTotalPrice())} </h3>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
