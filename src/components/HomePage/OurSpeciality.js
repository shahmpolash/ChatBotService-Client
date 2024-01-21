import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OurSpeciality = () => {
  const { id } = useParams();

  const [speciality, SetSpeciality] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info[0]));
  }, [id]);

  return (
    <>
      <div className="wg-create-design style-1">
        <img
          className="item1 block-star"
          src="https://themesflat.co/html/munai/assets/images/item-background/start.png"
          alt=""
        />
        <div className="item2 block-blur-1" />
        <div className="item3 block-blur-2" />
        <div className="item4 block-blur-3" />
        <div className="item5 block-blur-4" />
        <img
          className="item6"
          src="https://themesflat.co/html/munai/assets/images/item-background/dot.png"
          alt=""
        />
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-5 ">
              <div className="content">
                <div className="heading-section fadeInUp">
                  <h6>{speciality.titleTop}</h6>
                  <div className="main-title">{speciality.title}</div>
                </div>
                <p className="">{speciality.description}</p>
                <ul className="list-item">
                  <li>
                    <i className="icon-check" />
                    {speciality.itemOne}
                  </li>
                  <li>
                    <i className="icon-check" />
                    {speciality.itemTwo}
                  </li>
                  <li>
                    <i className="icon-check" />
                    {speciality.itemThree}
                  </li>
                  <li>
                    <i className="icon-check" />
                    {speciality.itemFour}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 ">
              <div className="image">
                <img className="img-01" src={speciality.imageOne} alt="" />
                <img className="img-02" src={speciality.imageTwo} alt="" />
                <img
                  className="img-03"
                  src="https://themesflat.co/html/munai/assets/images/item-background/dot.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSpeciality;
