import  {useState, useEffect} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'
import useAppSelector from '../hooks/useAppSelector';
const Navbar = () => {
const [total, setTotal] = useState(0);
    const cart = useAppSelector((state) => state.cartReducers)
      useEffect(() => {
        setTotal(
          cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
        );
      }, [cart]);
    const navlinks = [
      { link: "/", text: "Home" },
      { link: "/products", text: "Product" },
      { link: "/profile", text: "Account" },
      { link: "/signin", text: "Login" },
    ];
  return (
    <nav>
      <Link to="/">
        <img src="/logo192.png" alt="" className="logo" />
      </Link>
      <ul>
        {navlinks.map((item) => (
          <li key={item.link}>
            <NavLink
              className={(link) => {
                return link.isActive ? "active" : "";
              }}
              to={item.link}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
 
        <li>
          <Link to ="/cart">
                      <FaShoppingCart />
                      <span>{total}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar