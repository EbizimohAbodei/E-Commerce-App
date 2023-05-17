import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layout/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
