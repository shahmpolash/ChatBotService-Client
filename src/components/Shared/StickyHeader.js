import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const StickyHeader = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
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
        return "/admin/dashboard";
      } else {
        return "/user-dashboard";
      }
    }
    return "/login";
  };

  return (
    <>
      <div
        className="header-banner-1"
        style={{
          marginBottom: "10vh",
        }}
      >
        <div className="bg-item">
          <div className="item-3 block-blur-1" />
          <div className="item-4 block-blur-2" />
          <div className="item-5 block-blur-3" />
          <div className="item-6 block-blur-4" />
        </div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-6 col-12"></div>
            <div className="col-xl-6 col-12 images">
              <div className=" relative w-full h-full">
                <div className="border-dashed-line" />

                <div className="wrap-user item-3">
                  <div className="image">
                    <div className="counter-like counter"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
