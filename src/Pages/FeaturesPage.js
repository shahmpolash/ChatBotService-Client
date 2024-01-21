import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FeaturesPage = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/features`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, [id]);

  return (
    <>
      {/* <div className="card-box__features_card">
        <section
          className="about payment-setting card-box__features features__center"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="shape right" />

          <div className="container">
            {feature.map((e, i) => (
              <>
                <div className="row  justify-content-center" key={i}>
                  <div className="col-lg-5 col-md-12">
                    <div className="about__right">
                      <div className="images">
                        <img className="img1" src={e.featureImg} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <div className="block-text">
                      <h3 className="heading wow" data-splitting="">
                        {e.featureTitle}
                      </h3>
                      <p className="mb-17 feature__text-left">
                        {e.featureDesc
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <br />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </div> */}

      <section className="about-area about-area-v2 pt-130">
        <div className="container">
          {feature.map((e) => (
            <div className="row">
              <div className="col-lg-5">
                <div className="img-holder mb-50 wow fadeInLeft">
                  <div className="shape shape-one animate-float-y">
                    <span>
                      <img src="assets/images/shape/shape-5.png" alt="images" />
                    </span>
                  </div>
                  <img src={e.featureImg} alt="about-images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-wrapper mb-50 wow fadeInRight">
                  <div className="section-title mb-25">
                    <h2> {e.featureTitle}</h2>
                  </div>
                  <p>
                    {feature.map((AboutData, index) => (
                      <div key={index}>
                        {AboutData.featureDesc
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <p />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
