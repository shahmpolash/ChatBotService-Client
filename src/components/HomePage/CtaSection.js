import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const [faqTitle, setFaqTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/faqs-title`)
      .then((res) => res.json())
      .then((info) => setFaqTitle(info[0]));
  }, []);
  return (
    <>
      <div className="cta">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="cta-wrapper">
                <div className="ellipse item1" />
                <div className="ellipse item2" />
                <div className="ellipse item3" />
                <div className="ellipse item4" />
                <div className="cta-title">
                  <h6>{faqTitle.titleTopText}</h6>
                  <h2>{faqTitle.titleOne}</h2>
                </div>
                <div className="cta-content">
                  <p className="two-lines">{faqTitle.titleTwo}</p>
                  <div className="flex gap20">
                    <Link to="/contact-us" className="tf-button style-1 active">
                      Contact Us <i className="icon-arrow-right2" />
                    </Link>
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

export default CtaSection;
