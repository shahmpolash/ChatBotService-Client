import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const GeneralOption = () => {
  const { id } = useParams();
  const [paymentEmail, setPaymentEmail] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  return (
    <div>
 <BackToAdminDashboard></BackToAdminDashboard>
      <section
        className="box-messages"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="container">
          <div className="row">
           
            <div className="col-12">
              <div className="block-text center">
                <div className="col-md-4">
                  <h5 className="heading ">Logo Option</h5>

                  {logo.map((logoImg) => (
                    <div className="blog-box">
                      <img
                        className="mb-15 footer__logo"
                        src={logoImg.logo}
                        alt=""
                      />
                      <hr></hr>
                      <p>Logo Size: width="160px" height: "38px"</p>
                      <Link
                        to={`/admin/update-logo/${logoImg._id}`}
                        className="tf-button get-start h45"
                      >
                        <span>update Logo</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralOption;
