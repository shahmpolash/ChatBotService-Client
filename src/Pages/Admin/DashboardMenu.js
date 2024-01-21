import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import BackToAdminDashboard from "./BackToAdminDashboard";

const DashboardMenu = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <>
      <section className="project s2">
        <div className="container">
          <div className="row mb-3 mt-5">
            <div className="col d-flex justify-content-end">
              {user ? (
                <Link
                  className="tf-button get-start h45"
                  onClick={handleSignout}
                >
                  <span>Signout</span>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="helpful pt-130 box-messages">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-view" />
                </div>
                <h6>
                  <Link to="/admin/packages/">Package Edit</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-cart" />
                </div>
                <h6>
                  <Link to="/admin/orders/">Total Orders</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-setting" />
                </div>
                <h6>
                  <Link to="/admin/setting">Setting Option</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-maintenance-1" />
                </div>
                <h6>
                  <Link to="/admin/help-desk/">Help Desk</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-share" />
                </div>
                <h6>
                  <Link to="/admin/subscription-email/">
                    Subscription Email
                  </Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-envelope" />
                </div>
                <h6>
                  <Link to="/admin/contact-messages/">Contact Messages</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-users" />
                </div>
                <h6>
                  <Link to="/admin/manage-users/">Manage Users</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DashboardMenu;
