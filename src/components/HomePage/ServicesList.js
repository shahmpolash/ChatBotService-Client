import React, { useEffect, useState } from "react";
import "./ServicesList.css";
import { Link } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/service-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      

      <section className="service-area service-area-v1">
        <div className="container-1350">
          <div className="service-wrapper pt-75 pb-40">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {title.map((e) => (
                  <div className="section-title text-center mb-55 wow fadeInUp">
                    <h2>{e.title}</h2>
                    <p> {e.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row justify-content-center">
              {services.map((e) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="service-item service-style-two mb-40 wow fadeInUp"
                    data-wow-delay=".15s"
                  >
                    <div className="icon">
                      <img src={e.img} class="img-fluid rounded-top" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link to={`/service/${e.postSlug}`}>{e.title}</Link>
                      </h3>
                      <ul className="list-style-two">
                        <li> {truncateText(e.description, 200)} </li>
                      </ul>
                      <Link className="btn-link" to={`/service/${e.postSlug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
