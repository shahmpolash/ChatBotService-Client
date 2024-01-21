import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import StickyHeader from "./StickyHeader";
const currentDomain = window.location.origin;

const NavBar = () => {
  const [logo, setLogo] = useState({});
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info[0]));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setAdmin(info));
  }, []);

  // Function to determine the dashboard link based on user role
  const getDashboardLink = () => {
    if (admin && admin.length > 0) {
      const isAdmin = admin.some(
        (userData) =>
          userData.userEmail === user.email && userData.userRole === "Admin"
      );
      if (isAdmin) {
        return "/admin/dashboard"; // Link for admin dashboard
      } else {
        return "/user-dashboard"; // Link for normal user dashboard
      }
    }
    return "/login"; // Default to login if user data is not fetched yet or user role not found
  };

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    <>
      <div>
        <header id="header_main" className="header header-fixed style-absolute">
          <div className="header-inner">
            <div id="site-logo">
              <div id="site-logo-inner">
                <Link to="/" rel="home" className="main-logo">
                  <img
                    id="logo_header"
                    src={logo.logo}
                    data-retina={logo.logo}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            {/* logo */}
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu-primary-menu">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us">About Us</Link>
                </li>

                <li className="menu-item">
                  <Link to="/contact-us">Contact Us</Link>
                </li>

                <li className="menu-item">
                  <a href={`${currentDomain}#pricing`}>Pricing</a>
                </li>
              </ul>
            </nav>

            <div className="header-right">


              {user ? (
                <Link
                  className="tf-button get-start h45"
                  to={getDashboardLink()}
                >
                  <span>Dashboard</span>
                  <i className="icon-arrow-right2" />
                </Link>
              ) : (
                <Link to="/login" className="tf-button get-start h45">
                  <span>Login Now</span>
                </Link>
              )}
            </div>
            <div className="mobile-button hidden">
              <span />
            </div>
          </div>
          <div className="mobile-nav-wrap">
            <div className="overlay-mobile-nav" />
            <div className="inner-mobile-nav">
              <Link to="/" rel="home" className="main-logo">
                <img
                  id="mobile-logo_header"
                  src={logo.logo}
                  data-retina={logo.logo}
                  alt="logo"
                />
              </Link>
              <div className="mobile-nav-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="white"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 122.878 122.88"
                  enableBackground="new 0 0 122.878 122.88"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                  </g>
                </svg>
              </div>
              <nav id="mobile-main-nav" className="mobile-main-nav">
                <ul id="menu-mobile-menu" className="menu">
                  <li className="menu-item menu-item-has-children-mobile current-menu-item">
                    <a className="item-menu-mobile">Home</a>
                  </li>

                  <li className="menu-item">
                    <Link className="item-menu-mobile" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="item-menu-mobile" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {shouldRenderPageHero && <StickyHeader />}
      </div>
    </>
  );
};

export default NavBar;
