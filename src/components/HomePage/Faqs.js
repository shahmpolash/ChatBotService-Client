import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <>
      <section className="faq">
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {title.map((e) => (
                <li>
                  <Link to={`/service/${e.postSlug}`}>{e.title}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
