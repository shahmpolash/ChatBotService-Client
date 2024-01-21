import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useParams } from "react-router-dom";

const Testimonials = () => {
  const { id } = useParams();
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsTitle, setTestimonialsTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Testimonials Data:", data);
        setTestimonials(data);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));

    fetch(`http://localhost:5000/testimonials-title/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Testimonials Title Data:", data);
        setTestimonialsTitle(data[0]);
      })
      .catch((error) =>
        console.error("Error fetching testimonials title:", error)
      );
  }, []);

  return (
    <>
      {/* <section className="counter-area counter-area-v2 pb-90 pt-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <h2></h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-area testimonial-area-v2 pb-135 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img-holder mb-55 wow fadeInLeft">
                <img src={testimonialsTitle.img} alt="testimonial images" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-wrapper">
                <div className="testimonial-slider-two mb-55">
                  <AliceCarousel
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={3000}
                    animationDuration={2000}
                    infinite
                    touchTracking={false}
                    items={testimonials.map((testimonial) => (
                      <div key={testimonial._id} className="testimonial-item">
                        <div className="testimonial-content">
                          <div className="quote-rating d-flex justify-content-between align-items-center">
                            <div className="quote">
                              <i className="flaticon-quotation" />
                            </div>
                          </div>

                          <h4>{testimonial.desc}</h4>
                          <img
                            class="rounded-circle shadow-4-strong mt-5"
                            alt="avatar2"
                            src={testimonial.personImg}
                            width={100}
                          />
                          <div className="author-title">
                            <h4>{testimonial.personName}</h4>
                            <p className="position">
                              {testimonial.personTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-two-dots text-center" />
            </div>
          </div>
        </div>
      </section> */}

      <div className="wg-testimonials-1 relative pt-130">
        <div className="ellipse1 item5" />
        <div className="ellipse1 item4" />
        <div className="ellipse1 item3" />
        <div className="ellipse1 item2" />
        <div className="ellipse1 item1" />
        <div className="box-color" />
        <div className="ellipse item5" />
        <div className="ellipse item4" />
        <div className="ellipse item3" />
        <div className="ellipse item2" />
        <div className="ellipse item1" />
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-5 testimonial-item1">
              <div className="content">
                <h2>
                  <span className="animation-text">
                    {testimonialsTitle.title}
                  </span>
                </h2>
                <p>{testimonialsTitle.description}</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="box-quote-left slider-type2">
                <AliceCarousel
                  autoPlay
                  autoPlayStrategy="none"
                  autoPlayInterval={3000}
                  animationDuration={2000}
                  infinite
                  disableButtonsControls
                  touchTracking={false}
                  items={testimonials.map((testimonial) => (
                    <div key={testimonial._id} className="testimonial-item">
                      <div className="testimonial-content">
                        <div className="quote-rating d-flex justify-content-between align-items-center">
                          <div className="quote">
                            <i className="flaticon-quotation" />
                          </div>
                        </div>
                        <div className="text-center">
                            <img
                              className="rounded-circle shadow-4-strong mt-5"
                              alt="avatar"
                              src={testimonial.personImg}
                              width={75}
                            />
                            <p className="position mt-3 mb-2">
                              {testimonial.personTitle}
                            </p>
                          </div>
                        <h4>{testimonial.desc}</h4>

                        <div className="author-title">
                          <h4>{testimonial.personName}</h4>

                          
                        </div>
                      </div>
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
