import React, { useEffect, useState } from "react";

const WorkingProcess = () => {
  const [road, setRoad] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/road/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((info) => setRoad(info[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="wg-road-map pt-130 pb-130">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center  fadeInUp">
                <h6>{road.titleTop}</h6>
                <div className="main-title">{road.title}</div>
              </div>
            </div>
            <div className="col-12">
              <div className="road-map-content">
                <div className="road-map-item item-1  fadeInUp">
                  <div className="number">1</div>
                  <h4>
                    <a>{road.cardTitleOne}</a>
                  </h4>
                  <p>{road.descriptionOne}</p>
                  <span className="arrow">
                    <svg
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                </div>
                <div className="road-map-item item-2  fadeInUp">
                  <div className="number">2</div>
                  <h4>
                    <a>{road.cardTitleTwo}</a>
                  </h4>
                  <p>{road.descriptionTwo}</p>
                  <span className="arrow">
                    <svg
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                </div>
                <div className="road-map-item item-3  fadeInUp">
                  <div className="number">3</div>
                  <h4>
                    <a>{road.cardTitleThree}</a>
                  </h4>
                  <p>{road.descriptionThree}</p>
                  <span className="arrow">
                    <svg
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                </div>
                <div className="road-map-item item-4  fadeInUp">
                  <div className="number">4</div>
                  <h4>
                    <a>{road.cardTitleFour}</a>
                  </h4>
                  <p>{road.descriptionFour}</p>
                  <span className="arrow">
                    <svg
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
