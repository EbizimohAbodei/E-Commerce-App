import React from 'react'
import {NavLink, Outlet, Link} from 'react-router-dom'

import Footer from '../components/Footer'
import { AppBar, Box, CssBaseline, Divider,Toolbar, IconButton, List, ListItem, ListItemButton,  Typography, Button, Drawer, Avatar } from '@mui/material';
import { FaBars, FaShoppingCart } from "react-icons/fa";

import MyMenu from '../components/Menus'
import useAppSelector from '../hooks/useAppSelector';
interface Props {
 
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const Root = (props:Props) => {
  const cart = useAppSelector((state) => state.cartReducers);
  const user = useAppSelector((state) => state.userReducers);
const navlinks = [
  { link: "/", text: "Home" },
  { link: "/products", text: "Product" },
];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> 
      <List>
        {navlinks.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={item.link}>
                {item.text}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
console.log(user.user);

   
  return (
    <>
      <Box sx={{}}>
        <CssBaseline />
        <AppBar
          component="nav"
          variant="elevation"
          sx={{ backgroundColor: "var(--secondary-color-dark)" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <FaBars color="#1f2c3a" />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                width: "1rem",
              }}
            >
              <svg
                className="react-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
              >
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="white" />
                <g stroke="#fff" stroke-width="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {navlinks.map((item) => (
                  <Link key={item.link} to={item.link} className="nav-link">
                    {item.text}
                  </Link>
                ))}

                {user?.user?.role === "admin" ? (
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                ) : (
                  ""
                )}
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  width: { xs: "none", sm: "40rem", md: "23rem" },
                  justifyContent: "space-between",
                }}
              >
                {user.isLoggedin || user?.user?.email ? (
                  <MyMenu
                    title="account"
                    links={[
                      { link: "/profile", text: "Profile" },
                      { link: "#", text: "Logout" },
                    ]}
                  />
                ) : (
                  <MyMenu
                    title="Login/Signup"
                    links={[
                      { link: "/signin", text: "Login" },
                      { link: "/create-account", text: "SignUp" },
                    ]}
                  />
                )}

                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "var(--secondary-color)",
                    color: "white",
                    border: "none",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "var(--secondary-color)",
                      border: "none",
                    },
                  }}
                >
                  <Link to="/cart" style={{ color: "white" }}>
                    My Cart
                    <FaShoppingCart
                      color="white"
                      style={{ margin: "0 .3em" }}
                    />
                    <Typography
                      component="span"
                      sx={{
                        backgroundColor: "white",
                        color: "var(--primary-color)",
                        padding: "0 .3rem",
                        borderRadius: 1,
                      }}
                    >
                      {cart.length}
                    </Typography>
                  </Link>
                </Button>
                <Avatar src={user?.user?.avatar} alt="logo" />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <Outlet />

          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Root