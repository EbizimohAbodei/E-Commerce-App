import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Paper } from "@mui/material";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper>
      <footer className="footer-distributed">
        <div className="footer-right">
          <Link to="#">
            <Facebook />
          </Link>
          <Link to="#">
            <Twitter />
          </Link>
          <Link to="https://www.linkedin.com/in/abodei-ebizimoh-94477389/">
            <LinkedIn />
          </Link>
          <Link to="https://github.com/EbizimohAbodei">
            <GitHub />
          </Link>
        </div>
        <div className="footer-left">
          <Link to="/">Home</Link>
          <Link to="/product">Pricing</Link>
          <Link to="/create-account">Sign Up</Link>
          <Link to="/sign">Login</Link>
          <Link to="#">Contact</Link>
          <span style={{ color: "white" }}>Online Store &copy; 2023</span>
        </div>
      </footer>
    </Paper>
  );
};

export default Footer;
