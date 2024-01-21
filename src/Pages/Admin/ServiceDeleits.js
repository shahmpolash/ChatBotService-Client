import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PricePage from "../PricePage";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${slug}`)
      .then((res) => res.json())
      .then((info) => setServiceData(info))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);

  const margin0 = {
    marginBottom: "0",
    marginRight: "10px",
  };

  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  const [ServicePackage, setServicesPackages] = useState([]);
  useEffect(() => {
    fetch(` http://localhost:5000/service-packages`)
      .then((res) => res.json())
      .then((info) => setServicesPackages(info));
  }, []);

  return (
    <>
      <section className="touch" data-aos="fade-up" data-aos-duration={2000}>
        <section className="page-banner bg_cover position-relative z-1">
          <div className="shape shape-one scene">
            <span data-depth={1}>
              <img
                src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png"
                alt
              />
            </span>
          </div>
          <div className="shape shape-two scene">
            <span data-depth={2}>
              <img
                src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-2.png"
                alt
              />
            </span>
          </div>
          <div className="shape shape-three scene">
            <span data-depth={3}>
              <img
                src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-3.png"
                alt
              />
            </span>
          </div>
          <div className="shape shape-four scene">
            <span data-depth={4}>
              <img
                src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-2.png"
                alt
              />
            </span>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="page-title">
                  <span>Service Details</span>
                  <h2> {serviceData.title}</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="page-banner-img"
                  style={{ marginBottom: "-100px" }}
                >
                  <img src={serviceData.img} alt="services images" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="card-box__features_card">
        <section
          className="about payment-setting card-box__features features__center"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="shape" />

          <div className="container">
            <>
              <div className="row  justify-content-center">
                <div className="col-lg-12 col-md-12">
                  <div className="block-text">
                    <p className="mb-17 feature__text-left mt-5">
                      {serviceData.description &&
                        serviceData.description
                          .split("\n")
                          .map((sentence, sentenceIndex) => (
                            <p key={sentenceIndex}>{sentence}</p>
                          ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          </div>
        </section>
      </div>
      <section
        style={{ marginTop: "50px" }}
        className="testimonials s2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        
      </section>
      <PricePage></PricePage>
    </>
  );
};

export default ServiceDetails;
