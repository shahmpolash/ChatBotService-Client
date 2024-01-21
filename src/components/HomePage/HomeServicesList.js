// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const HomeServicesList = () => {
//   const [services, setServices] = useState([]);
//   const [title, setTitle] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/services-list/`)
//       .then((res) => res.json())
//       .then((info) => setServices(info));
//   }, []);
//   useEffect(() => {
//     fetch(`http://localhost:5000/service-title/`)
//       .then((res) => res.json())
//       .then((info) => setTitle(info));
//   }, []);

//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + "...";
//     }
//     return text;
//   };

//   return (
//     <>
//       <section className="service-area service-area-v1">
//         <div className="container-1350">
//           <div className="service-wrapper pt-75 pb-40">
//             <div className="row justify-content-center">
//               <div className="col-lg-8">
//                 {title.map((e) => (
//                   <div className="section-title text-center mb-55 wow fadeInUp">
//                     <h2>{e.title}</h2>
//                     <p> {e.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <section className="about-area about-area-v2 pt-130">
//               <div className="container">
//                 {services.map((e) => (
//                   <div className="row">
//                     <div className="col-lg-5">
//                       <div className="img-holder mb-50 wow fadeInLeft">
//                         <div className="shape shape-one animate-float-y">
//                           <span>
//                             <img
//                               src="assets/images/shape/shape-5.png"
//                               alt="images"
//                             />
//                           </span>
//                         </div>
//                         <img src={e.img} alt="about-images" />
//                       </div>
//                     </div>
//                     <div className="col-lg-7">
//                       <div className="text-wrapper mb-50 wow fadeInRight">
//                         <div className="section-title mb-25">
//                           <h2> {e.title}</h2>
//                         </div>
//                         <p>
//                           {services.map((AboutData, index) => (
//                             <div key={index}>
//                               {AboutData.description
//                                 .split(". ")
//                                 .map(
//                                   (sentence, sentenceIndex, sentencesArray) => (
//                                     <React.Fragment key={sentenceIndex}>
//                                       {sentenceIndex > 0 &&
//                                         sentenceIndex % 2 === 0 && <p />}{" "}
//                                       <p>{sentence}</p>
//                                     </React.Fragment>
//                                   )
//                                 )}
//                             </div>
//                           ))}
//                         </p>

//                         <Link
//                           to={e.btnUrl}
//                           className="main-btn bordered-btn btn-blue"
//                         >
//                           {e.btnText}
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomeServicesList;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HomeServicesList = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));

    fetch(`http://localhost:5000/service-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
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
                <div className="section-title text-center mb-55 wow fadeInUp">
                  <h2>{title.title}</h2>
                  <p> {title.description}</p>
                </div>
              </div>
            </div>

            <section className="about-area about-area-v2">
              <div className="container">
                {services.map((e, index) => (
                  <div
                    className={`row ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                    key={index}
                  >
                    <div className="col-lg-5">
                      <div className="img-holder mb-50 wow fadeInLeft">
                        <div
                          className={`shape animate-float-y ${
                            index % 2 !== 1
                              ? "shape-one"
                              : "animate-float-right"
                          }`}
                        >
                          <span>
                            <img
                              src="assets/images/shape/shape-5.png"
                              alt="images"
                            />
                          </span>
                        </div>
                        <img
                          className="service__image"
                          src={e.img}
                          alt="about-images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="text-wrapper mb-50 wow fadeInRight">
                        <div className="section-title mb-25">
                          <h2>{e.title}</h2>
                        </div>
                        <p>{truncateText(e.description, 500)}</p>

                        <Link
                          to={`/service/${e.postSlug}`}
                          className="main-btn bordered-btn btn-blue"
                        >
                          Deteils
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServicesList;
