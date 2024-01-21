import React, { useEffect, useState } from "react";

const HowToHelp = () => {
  const [choose, setChoose] = useState([]);
  const [title, setTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/all-help-section`)
      .then((res) => res.json())
      .then((info) => setChoose(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/help-section-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, []);

  return (
    <>
      <div className="list-tool">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section text-center  fadeInUp">
                <h6>{title.titleTop}</h6>
                <div className="main-title mb-5">{title.title}</div>
                <img src={title.image} class="img-fluid rounded-top" alt="" />
              </div>
            </div>

            {choose.map((e, i) => (
              <div className="col-md-5">
                <div className="wg-tool fadeInUp">
                  <img
                    src={e.image}
                    width={56}
                    class="img-fluid rounded-top"
                    alt=""
                  />

                  <h3>
                    <a>{e.title}</a>
                  </h3>
                  <p>{e.description}</p>
                  <div className="order">{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToHelp;
