import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import Root from "./layout/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import useAppSelector from "./hooks/useAppSelector";
import useAppDispatch from "./hooks/useAppDispatch";
import { getUser } from "./redux/reducers/userReducer";
import Admin from "./pages/Admin";
import AdminRoot from "./layout/AdminRoot";
import CreateProduct from "./pages/CreateProduct";
import { fetchAllProducts } from "./redux/reducers/productReducers";
import { fetchAllCategories } from "./redux/reducers/categoryReducers";
import EditProduct from "./pages/EditProduct";

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
  {
    path: "/admin",
    element: <AdminRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "product/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducers);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, user.isLoggedin]);

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default App;
