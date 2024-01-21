import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const Setting = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/meta-infomations`)
      .then((res) => res.json())
      .then((info) => setMeta(info));
  }, [id]);
  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>

      {/* <section
        className="project s2 payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="shape right" />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 mt-5">
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/Vkw0BXYv/setting-12711143.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-general/" className="h5 title">
                    <h5 className="blue-dark">General Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/Hkq2D612/optimization-6521324.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-footer" className="h5 title">
                    <h5 className="blue-dark">Footer Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/y8gPbwtx/pay-9725654.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-payment" className="h5 title">
                    <h5 className="blue-dark">Payment Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/hjg1hhjQ/home-page-12630615.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-homepage" className="h5 title">
                    <h5 className="blue-dark">HomePage Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/xCPzcRJL/telephone-4421509.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  {contact.map((e) => (
                    <Link
                      to={`/admin/edit-contact-page/${e._id}`}
                      className="h5 title"
                    >
                      <h5 className="blue-dark"> Contact Page Setting</h5>
                    </Link>
                  ))}
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/SKcGycyp/alert-9321524.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  {contact.map((e) => (
                    <Link to={`/admin/edit-meta/${e._id}`} className="h5 title">
                      <h5 className="blue-dark"> Update Meta Info</h5>
                    </Link>
                  ))}
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/HsPz3pSF/sop-13063192.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/services-list" className="h5 title">
                    <h5 className="blue-dark">Services List</h5>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="helpful pt-130 box-messages">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-view" />
                </div>
                <h6>
                  <Link to="/admin/setting-general/">General Setting</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-pen" />
                </div>
                <h6>
                  <Link to="/admin/setting-footer">Footer Setting</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-users" />
                </div>
                <h6>
                  <Link to="/admin/setting-payment">Payment Setting</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-chart-line" />
                </div>
                <h6>
                  <Link to="/admin/setting-homepage">HomePage Setting</Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-share" />
                </div>
                <h6>
                  {contact.map((e) => (
                    <Link to={`/admin/edit-contact-page/${e._id}`}>
                      Contact Page Setting
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-chart-network" />
                </div>
                <h6>
                  {meta.map((e) => (
                    <Link to={`/admin/edit-meta/${e._id}`} className="h5 title">
                      <h5 className="blue-dark"> Update Meta Info</h5>
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-comment" />
                </div>
                <h6>
                  <Link to="/admin/services-list">Services List</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
