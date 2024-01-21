import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricePage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  const [title, setTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, []);

  return (
    <>
      <div className="wg-pricing" id="pricing">
        <div className="item1 block-blur-1" />
        <div className="item2 block-blur-2" />
        <div className="item3 block-blur-3" />
        <div className="item4 block-blur-4" />
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center fadeInUp">
                <h6>{title.titleTop}</h6>
                <div className="main-title ">
                  {title.titleOne} <br />
                  <span className="animation-text"> {title.titleTwo}</span>
                </div>
              </div>
            </div>


            {packages.map((e) => (
              <div className="col-md-6 text-center">
                <div className="pricing-item">
                  <h3>{e.packageName}</h3>

                  <div className="number-price mt-2">${e.price}</div>
                  <Link
                    to={`/service-package/${e._id}`}
                    className="tf-button type-2 d-block mx-auto"
                  >
                    <span>Choose Plan</span>
                    <i className="icon-arrow-right2" />
                  </Link>
                  .<div
                    class="row justify-content-center align-items-center g-2"
                  >
                    <div class="col-3"></div>
                    <div class="col-9"> <ul className="list-unstyled text-left font-size-price">
                      <li>
                        <i className="icon-check" /> {e.PointOne}
                      </li>
                      <li>
                        <i className="icon-check" /> {e.PointTwo}
                      </li>
                      <li>
                        <i className="icon-check" /> {e.PointThree}
                      </li>
                      <li>
                        <i className="icon-check" /> {e.PointFour}
                      </li>
                      <li>
                        <i className="icon-check" /> {e.PointFive}
                      </li>
                    </ul></div>
                   
                  </div>

                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </>
  );
};

export default PricePage;
