import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CounterSection = () => {
  const { id } = useParams();

  const [title, setTitle] = useState({});
  const [counterSection, setCounterSection] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/counter-section-title/${id}`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters-section/`)
      .then((res) => res.json())
      .then((info) => setCounterSection(info[0]));
  }, [id]);

  return (
    <>
      <section className="counter-area counter-area-v2 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <h2>{title.title}</h2>
                <p>{title.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src={counterSection.imgOne} alt="" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <span>{counterSection.numberOne}</span>+
                  </h2>
                  <p>{counterSection.titleOne}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 wow fadeInUp item-active"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src={counterSection.imgTwo} alt="" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <span>{counterSection.numberTwo}</span>+
                  </h2>
                  <p>{counterSection.titleTwo}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src={counterSection.imgThree} alt="" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <span>{counterSection.numberThree}</span>+
                  </h2>
                  <p>{counterSection.titleThree}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src={counterSection.imgFour} alt="" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <span>{counterSection.numberFour}</span>+
                  </h2>
                  <p>{counterSection.titleFour}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterSection;
